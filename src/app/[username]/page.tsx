import prisma from '../../../prisma/client'
import ListCard from '../Components/Cards/ListCard'

async function getPosts(username: string) {
  const posts = await prisma.user.findFirst({
    where: {
      username: decodeURIComponent(username)
    },
    select: {
      id: true,
      name: true,
      image: true,
      username: true,
      email: true,
      bio: true,
      posts: {
        include: {
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
          }
        }
      }
    }
  })

  return posts
}

export default async function Page({
  params
}: {
  params: { username: string }
}) {
  const { username } = params
  const posts = await getPosts(username)
  return (
    <div className="relative">
      <div className="wp-block-group container">
        <div className="wp-block-group__inner-container">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12">
              <div className="py-8">
                <div className="flex items-center">
                  <div>
                    <h1 className="ml-2  lg:text-4xl text-3xl lg:font-medium  text-ellipsis  max-h-[52px] break-words">
                      {posts?.name}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                  <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                      <a
                        href="#"
                        className="inline-block p-4 font-normal text-pink-600 border-b-2 border-pink-600 rounded-t-lg active dark:text-pink-500 dark:border-pink-500"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="inline-block p-4 border-b-2 font-normal border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {posts?.posts.map(post => (
                <ListCard
                  key={post.id}
                  post={{ ...post, author: null }}
                  slug={post.PostTag[0].tag.normalizedTagSlug}
                />
              ))}
            </div>
            <div className="lg:col-span-4 border-l p-9 pt-0 hidden lg:block">
              <aside className="sticky top-[80px] self-start w-full">
                <div className="mt-5">
                  {/* first */}

                  <div className="w-full  bg-white dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col pb-10">
                      <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={posts?.image || ''}
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {posts?.name}
                      </h5>
                      <p className="text-gray-600">229 Followers</p>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {posts?.bio}
                      </span>
                      <div className="flex mt-4 space-x-3 md:mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Follow
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        >
                          Message
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
