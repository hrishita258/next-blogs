import fs from 'fs'
import { NextResponse } from 'next/server'
import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  function readJsonFile(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err)
        } else {
          try {
            const jsonData = JSON.parse(data)
            resolve(jsonData)
          } catch (err) {
            reject(err)
          }
        }
      })
    })
  }

  const jsonFile = await readJsonFile('src/data.json')

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
        const result = jsonFile.find(
          (item: any) => item[0].data.postResult.uniqueSlug === row.slug
        )
        if (result) {
          const data = result[0].data.postResult.content.bodyModel.paragraphs
          const content = await convertToEditorJSData(data)
          if (content) {
            await prisma.post.update({
              where: { id: row.id },
              data: { content }
            })
            return { status: 'fulfilled', value: row.id }
          }
        }
      } catch (err) {
        return { status: 'rejected', reason: err, value: row.id }
      }
    })

    const results = await Promise.allSettled(promises)

    // console.log(results.filter((item: any) => item.status === 'fulfilled'))

    offset += batchSize
    console.log(`Offset: ${offset}`)
  }

  return NextResponse.json({ status: 'ok' })
}
