import prisma from '../../prisma/client'
import HomePage from './HomePage'

async function getHomePageData() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      PostTag: {
        select: {
          tag: {
            select: {
              normalizedTagSlug: true,
              displayTitle: true,
              id: true
            }
          }
        }
      },
      _count: {
        select: {
          likes: true
        }
      }
    }
  })
  const users = await prisma.user.findMany({
    include: {
      _count: {
        select: {
          posts: true
        }
      }
    }
  })
  const tags = await prisma.tag.findMany({
    include: {
      _count: {
        select: {
          PostTag: true
        }
      }
    }
  })
  return { posts, users, tags }
}

export default async function Page() {
  const HomePageData = await getHomePageData()
  return (
    <div>
      <HomePage
        key={'homepage'}
        tags={JSON.stringify(HomePageData.tags)}
        posts={JSON.stringify(HomePageData.posts)}
        users={JSON.stringify(HomePageData.users)}
      />
    </div>
  )
}
