import { NextResponse } from 'next/server'
import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  // const existingTags = await prisma.tag.findMany({
  //   select: { normalizedTagSlug: true }
  // })
  // const existingTagSlugs = new Set(
  //   existingTags.map(tag => tag.normalizedTagSlug)
  // )

  // const newTags = []
  // for (const item of data[0].data.tagFeed.items) {
  //   for (const tag of item.post.tags) {
  //     if (!existingTagSlugs.has(tag.normalizedTagSlug)) {
  //       existingTagSlugs.add(tag.normalizedTagSlug)
  //       newTags.push({
  //         displayTitle: tag.displayTitle,
  //         normalizedTagSlug: tag.normalizedTagSlug
  //       })
  //     }
  //   }
  // }

  // if (newTags.length > 0) {
  //   await prisma.tag.createMany({
  //     data: newTags
  //   })
  // }

  // const users = await prisma.user.findMany()
  // const tags = await prisma.tag.findMany()

  // const posts = await Promise.all(
  //   data[0].data.tagFeed.items.map(async (postData, i) => {
  //     const { post } = postData as any
  //     const user = users[(Math.random() * 25) | 0].id
  //     return await prisma.post.create({
  //       data: {
  //         authorId: user,
  //         title: post.title,
  //         slug: post.uniqueSlug,
  //         bannerImage: 'https://miro.medium.com/v2/' + post.previewImage.id,
  //         image: '',
  //         isFeatured: i % 2 === 0,
  //         isPremium: i % 3 === 0,
  //         published: true,
  //         isPublic: true,
  //         content: post.extendedPreviewContent?.subtitle,
  //         PostTag: {
  //           createMany: {
  //             data: post.tags.map((tag: any) => {
  //               const tagId = tags.find(
  //                 t => t.normalizedTagSlug === tag.normalizedTagSlug
  //               )?.id
  //               return { tagId }
  //             })
  //           }
  //         }
  //       }
  //     })
  //   })
  // )

  // const result = await prisma.user.createMany({
  //   data: users.map(user => {
  //     return {
  //       image: 'https://miro.medium.com/v2/' + user.imageId,
  //       email: user.id + '@sanchaar.com',
  //       username: user.username,
  //       bio: user.bio,
  //       password: '123456',
  //       name: user.name
  //     }
  //   })
  // })

  // const data = await request.json()

  const mapping: any = {
    P: 'paragraph',
    H3: 'header',
    IFRAME: 'embed',
    H2: 'header',
    H1: 'header',
    ULI: 'list',
    OLI: 'list',
    IMG: 'image',
    CODE: 'code',
    H4: 'header',
    H5: 'header',
    H6: 'header',
    PQ: 'quote',
    MIXTAPE_EMBED: 'linkTool',
    PRE: 'code',
    BQ: 'quote'
  }
  function applyMarkups(text: string, markups: any[]) {
    let result = text
    const priority: {
      [key: string]: number
    } = { A: 1, STRONG: 2, EM: 3, CODE: 4 }
    markups.sort((a, b) => {
      if (a.start !== b.start) {
        return b.start - a.start
      } else {
        return priority[a.type] - priority[b.type]
      }
    })
    for (const markup of markups) {
      const { type, start: originalStart, end: originalEnd } = markup
      let openTag = `<${type.toLowerCase()}>`
      let closeTag = `</${type.toLowerCase()}>`
      if (type === 'A') {
        openTag = `<a href="${markup.href}">`
        closeTag = '</a>'
      } else if (type === 'CODE') {
        openTag = '<code class="inline-code">'
        closeTag = '</code>'
      }

      let start = originalStart
      let end = originalEnd

      // Adjust start and end positions based on previously applied markups
      for (let i = 0; i < result.length && i < start; i++) {
        if (result[i] === '<') {
          while (i < result.length && result[i] !== '>') {
            i++
            start++
            end++
          }
        }
      }

      for (let i = start; i < result.length && i < end; i++) {
        if (result[i] === '<') {
          while (i < result.length && result[i] !== '>') {
            i++
            end++
          }
        }
      }

      // Apply current markup
      result =
        result.slice(0, start) +
        openTag +
        result.slice(start, end) +
        closeTag +
        result.slice(end)
    }

    return result
  }

  async function convertToEditorJSData(data: any) {
    const result: any = {
      time: Date.now(),
      blocks: []
    }

    let lists: { type: string; items: string[] }[] = []

    for (const item of data) {
      if (item.type === 'ULI' || item.type === 'OLI') {
        const listType = item.type === 'ULI' ? 'unordered' : 'ordered'
        const listItemText = applyMarkups(item.text, item.markups)
        const listIndex = lists.findIndex(list => list.type === listType)

        if (listIndex !== -1) {
          // Add item to existing list
          lists[listIndex].items.push(listItemText)
        } else {
          // Create new list
          lists.push({ type: listType, items: [listItemText] })
        }
      } else {
        // Add previous lists
        if (lists.length > 0) {
          for (const list of lists) {
            result.blocks.push({
              type: 'list',
              data: {
                style: list.type,
                items: list.items
              }
            })
          }
          lists = []
        }

        const block: any = {
          type: mapping[item.type],
          data: {
            text: applyMarkups(item.text, item.markups)
          }
        }

        if (block.type === 'header') {
          block.data.level = parseInt(item.type.charAt(1))
        }

        if (block.type === 'image') {
          block.data.file = {
            url: 'https://miro.medium.com/v2/' + item.metadata.id
          }
          block.data.caption = applyMarkups(item.text, item.markups)
          block.data.withBorder = false
          block.data.withBackground = false
          block.data.stretched = true
        }

        if (block.type === 'embed') {
          block.data.service = 'youtube'
          block.data.source = item.iframe.mediaResource.iframeSrc
          block.data.embed = item.iframe.mediaResource.iframeSrc
        }

        if (block.type === 'linkTool') {
          const res = await fetch(
            'http://localhost:3000/api/linkTool?url=' +
              item.mixtapeMetadata.href
          )
          const data = await res.json()
          block.data = data
          block.data.link = item.mixtapeMetadata.href
        }

        if (block.type === 'code') {
          block.data.code = item.text
          block.data.showlinenumbers = false
          block.data.language = item?.codeBlockMetadata?.lang || ''
        }

        result.blocks.push(block)
      }
    }

    // Add final lists
    for (const list of lists) {
      result.blocks.push({
        type: 'list',
        data: {
          style: list.type,
          items: list
        }
      })
    }

    return result
  }

  // return NextResponse.json(await convertToEditorJSData(data))
  const batchSize = 10
  let offset = 0
  let json = { content: 'need to add content' }
  while (true) {
    const rows = await prisma.post.findMany({
      where: { content: { equals: json } },
      take: batchSize,
      skip: offset
    })

    if (rows.length === 0) {
      break // no more rows to fetch, break out of the loop
    }

    const promises = rows.map(async row => {
      try {
        const result = await fetch(
          'http://localhost:4000/idharseudhar?slug=' + row.slug
        )
        const data = await result.json()
        const content = await convertToEditorJSData(data)
        await prisma.post.update({
          where: { id: row.id },
          data: { content }
        })
        return { status: 'fulfilled', value: row.id }
      } catch (err) {
        return { status: 'rejected', reason: err, value: row.id }
      }
    })

    const results = await Promise.allSettled(promises)

    console.log(`Processed ${results.length} rows`)

    offset += batchSize
    console.log(`Offset: ${offset}`)
  }

  return NextResponse.json({ status: 'ok' })
}
