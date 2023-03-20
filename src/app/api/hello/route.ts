import slugify from 'slugify'
import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  // const posts = await prisma.post.findMany()
  // const postIds = posts.map(post => post.id)
  // const users = await prisma.user.findMany()
  // const result = await prisma.collection.createMany({
  //   data: data[0]?.data?.sequenceStreamConnection?.stream?.map(item => {
  //     const sequence = item.itemType.sequence
  //     return {
  //       slug: sequence.slug,
  //       name: sequence.title,
  //       subtitle: sequence.subtitle,
  //       description: sequence.description,
  //       image: 'https://miro.medium.com/v2/' + sequence.coverImage.id,
  //       textColor: sequence.color,
  //       bgColor: sequence.bgColor,
  //       authorId: users[Math.floor(Math.random() * 25)].id
  //     }
  //   })
  // })
  // const collections = await prisma.collection.findMany()
  // const posts = await prisma.post.findMany()
  // const result = await prisma.collectionPost.createMany({
  //   data: posts.map(post => {
  //     return {
  //       collectionId: collections[Math.floor(Math.random() * 10)].id,
  //       postId: post.id,
  //       authorId: post.authorId
  //     }
  //   })
  // })
  // return new Response(JSON.stringify(result))
  const users = await prisma.user.findMany()

  for (const user of users) {
    const name = user.name
    const firstInitial = name[0]
    const lastName = name?.split(' ').pop()?.toLowerCase()
    const randomInt = Math.floor(Math.random() * 10000)
    const mediumUsername = slugify(`@${firstInitial}${lastName}${randomInt}`, {
      lower: true
    })

    console.log(
      await prisma.user.update({
        where: { id: user.id },
        data: {
          username: mediumUsername
        }
      })
    )
  }
}
