import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  const users = await prisma.user.findMany()
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      PostTag: {
        include: {
          tag: true
        }
      }
    }
  })
  return new Response(JSON.stringify({ users: [], posts }))
}
