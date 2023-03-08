import prisma from '../../prisma/client'
import HomePage from './HomePage'

async function getHomePageData() {
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
  const users = await prisma.user.findMany({})
  return { posts, users }
}

export default async function Page() {
  const HomePageData = await getHomePageData()
  console.log(HomePageData)
  return (
    <div>
      <HomePage
        key={'homepage'}
        posts={JSON.stringify(HomePageData.posts)}
        users={JSON.stringify(HomePageData.users)}
      />
    </div>
  )
}
