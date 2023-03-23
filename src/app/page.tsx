import prisma from '../../prisma/client'
import HomePage from './HomePage'

async function getHomePageData() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
      PostTopics: {
        select: {
          Topics: {
            select: {
              name: true,
              slug: true
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
    take: 24,
    orderBy: {
      createdAt: 'desc'
    }
  })
  const users = await prisma.user.findMany({
    include: {
      _count: {
        select: {
          Post: true
        }
      },
      Post: {
        where: {
          createdAt: {
            gte: new Date(new Date().setDate(new Date().getDate() - 30))
          }
        },
        select: {
          bannerImage: true,
          image: true
        },
        take: 1
      }
    },
    take: 12
  })
  const tags = await prisma.topics.findMany({
    select: {
      name: true,
      slug: true,
      _count: {
        select: {
          PostTopics: true
        }
      },
      PostTopics: {
        select: {
          Post: {
            select: {
              bannerImage: true,
              image: true
            }
          }
        },
        take: 1
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
