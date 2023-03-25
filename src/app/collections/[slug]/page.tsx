import ListCard from '@/app/Components/Cards/ListCard'
import Image from 'next/image'
import prisma from '../../../../prisma/client'

async function getCollection(slug: string) {
  const collectionWithPosts = await prisma.collection.findUnique({
    where: {
      slug
    },
    include: {
      CollectionPost: {
        select: {
          Post: {
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
              excerpt: true,
              primaryTopicId: true,
              slug: true,
              PostTag: {
                select: {
                  Tag: {
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
              },
              PostTopics: {
                select: {
                  Topics: {
                    select: {
                      id: true,
                      name: true,
                      slug: true
                    }
                  }
                }
              }
            }
          }
        }
      },
      User: {
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
      <aside className="hidden 2xl:block sticky top-16  self-start w-1/3">
        <img
          src={collectionWithPosts?.image || ''}
          alt="sda"
          className="h-[92vh]"
        />
      </aside>
      <article className="flex-1 px-2 2xl:mt-[210px] 2xl:mx-[80px] 2xl:mb-[80px]">
        <div className="flex justify-center p-3 2xl:hidden">
          <div className="relative h-80 w-4/5">
            <Image
              alt="collection"
              src={collectionWithPosts?.image || ''}
              fill
              loading="eager"
            />
          </div>
        </div>
        <span className="transition-colors py-0.5  hover:text-white duration-300 nc-Badge inline-flex lg:py-1 rounded-full lg:font-medium  relative px-1 my-1  text-sm  text-blue-800 hover:bg-blue-800 uppercase">
          Collection
        </span>
        <h1 className="2xl:text-6xl text-3xl font-semibold">
          {collectionWithPosts?.name}
        </h1>
        <p className="2xl:text-gray-800 mt-3 mb-9 text-lg text-gray-500">
          {collectionWithPosts?.description}
        </p>
        <div className="flex items-end border-b mb-5 py-3">
          <div className="mr-8 flex flex-auto items-center">
            <a
              href="asd"
              className="block whitespace-nowrap overflow-visible text-ellipsis relative"
            >
              <img
                src={collectionWithPosts?.User?.image || ''}
                alt="sda"
                className="h-16 w-16 rounded-full"
              />
            </a>
            <div className="ml-4">
              <span>
                <b className="mr-2">{collectionWithPosts?.User.name}</b>
                Author
              </span>
              <p className="text-sm"> {collectionWithPosts?.User.email}</p>
            </div>
          </div>
          <div></div>
        </div>
        {collectionWithPosts?.CollectionPost.map(({ Post }) => (
          <ListCard key={Post.id} post={Post} slug={'something'} />
        ))}
      </article>
    </div>
  )
}
