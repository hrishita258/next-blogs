import prisma from '../../prisma/client'
import HomePage from './HomePage'

async function getHomePageData() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      PostTag: {
        select: {
          Tag: {
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
          Like: true
        }
      }
    },
    take: 12
  })
  const users = await prisma.user.findMany({
    include: {
      _count: {
        select: {
          Post: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 12
  })
  const tags = await prisma.tag.findMany({
    include: {
      _count: {
        select: {
          PostTag: true
        }
      }
    },
    take: 12
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
