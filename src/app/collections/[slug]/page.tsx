import ListCard from '@/app/Components/Cards/ListCard'
import prisma from '../../../../prisma/client'

async function getCollection(slug: string) {
  const collectionWithPosts = await prisma.collection.findUnique({
    where: {
      slug
    },
    include: {
      posts: {
        select: {
          post: {
            select: {
              id: true,
              title: true,
              image: true,
              createdAt: true,
              bannerImage: true,
              content: true,
              published: true,
              isPremium: true,
              isFeatured: true,
              isPublic: true,
              authorId: true,
              updatedAt: true,
              slug: true,
              PostTag: {
                select: {
                  tag: {
                    select: {
                      displayTitle: true,
                      normalizedTagSlug: true,
                      id: true
                    }
                  }
                }
              },
              author: {
                select: {
                  email: true,
                  name: true,
                  image: true,
                  id: true
                }
              }
            }
          }
        }
      },
      author: {
        select: {
          email: true,
          name: true,
          image: true,
          id: true
        }
      }
    }
  })

  return { collectionWithPosts }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { collectionWithPosts } = await getCollection(slug)

  return (
    <div className="flex flex-col gap-5  mx-auto md:flex-row relative">
      <aside className="sticky top-16  self-start w-1/3">
        <img
          src={collectionWithPosts?.image || ''}
          alt="sda"
          className="h-[92vh]"
        />
      </aside>
      <article className="flex-1" style={{ margin: '210px 80px 80px 80px' }}>
        <span className="transition-colors py-0.5  hover:text-white duration-300 nc-Badge inline-flex lg:py-1 rounded-full lg:font-medium  relative px-1 my-1  text-sm  text-blue-800 hover:bg-blue-800 uppercase">
          Collection
        </span>
        <h1 className="text-6xl ">{collectionWithPosts?.name}</h1>
        <p className="text-gray-800 mt-3 mb-9 text-lg">
          {collectionWithPosts?.description}
        </p>
        <div className="flex items-end border-b mb-5 py-3">
          <div className="mr-8 flex flex-auto items-center">
            <a
              href="asd"
              className="block whitespace-nowrap overflow-visible text-ellipsis relative"
            >
              <img
                src={collectionWithPosts?.author?.image || ''}
                alt="sda"
                className="h-16 w-16 rounded-full"
              />
            </a>
            <div className="ml-4">
              <span>
                <b className="mr-2">{collectionWithPosts?.author.name}</b>
                Author
              </span>
              <p className="text-sm"> {collectionWithPosts?.author.email}</p>
            </div>
          </div>
          <div></div>
        </div>
        {collectionWithPosts?.posts.map(({ post }) => (
          <ListCard key={post.id} post={post} slug={'something'} />
        ))}
      </article>
    </div>
  )
}
