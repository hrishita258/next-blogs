import ListCardWrapper from '@/app/Components/TagsAuthorComponents/Tags/ListCardWrapper'
import RelatedTags from '@/app/Components/TagsAuthorComponents/Tags/RelatedTags'
import Stat from '@/app/Components/TagsAuthorComponents/Tags/Stat'
import TopAuthors from '@/app/Components/TagsAuthorComponents/Tags/TopAuthors'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { serializeObject } from '@/Utils/serializeObejct'
import { redirect } from 'next/navigation'
import { AiFillTags } from 'react-icons/ai'
import prisma from '../../../../prisma/client'

async function getPostsByTag(slug: string) {
  const posts = await prisma.post.findMany({
    where: {
      OR: [
        {
          PostTag: {
            some: {
              tag: {
                normalizedTagSlug: slug
              }
            }
          }
        },
        {
          PostTag: {
            some: {
              post: {
                PostTag: {
                  some: {
                    tag: {
                      PostTag: {
                        some: {
                          tag: {
                            normalizedTagSlug: slug
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          image: true
        }
      },
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
    },
    orderBy: {
      published: 'desc'
    },
    take: 10
  })

  const relatedTags = await prisma.tag.findMany({
    where: {
      OR: [
        {
          PostTag: {
            some: {
              post: {
                PostTag: {
                  some: {
                    tag: {
                      normalizedTagSlug: slug
                    }
                  }
                }
              }
            }
          }
        },
        {
          PostTag: {
            some: {
              post: {
                PostTag: {
                  some: {
                    tag: {
                      PostTag: {
                        some: {
                          tag: {
                            normalizedTagSlug: slug
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ],
      NOT: {
        normalizedTagSlug: slug
      }
    },
    orderBy: {
      posts: {
        _count: 'desc'
      }
    },
    take: 10
  })

  const topAuthors = await prisma.user.findMany({
    where: {
      posts: {
        some: {
          PostTag: {
            some: {
              tag: {
                normalizedTagSlug: slug
              }
            }
          }
        }
      }
    },
    select: {
      id: true,
      name: true,
      image: true,
      bio: true,
      email: true,
      _count: {
        select: {
          posts: true
        }
      }
    },
    orderBy: {
      posts: {
        _count: 'desc'
      }
    },
    take: 10
  })

  const { postCount, authorCount } = await prisma.tag
    .findUnique({
      where: { normalizedTagSlug: slug },
      select: {
        PostTag: {
          select: {
            post: true
          }
        }
      }
    })
    .then(tag => {
      const postIds = tag?.PostTag.map(post => post.post.id)
      const authorIds = tag?.PostTag.map(post => post.post.authorId)
      return {
        postCount: new Set(postIds).size,
        authorCount: new Set(authorIds).size
      }
    })

  return { posts, relatedTags, topAuthors, postCount, authorCount }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const { posts, relatedTags, topAuthors, authorCount, postCount } =
    await getPostsByTag(slug)
  const UsersImages = topAuthors.map(user => user.image)

  return (
    <div className="relative">
      <div className="wp-block-group container">
        <div className="wp-block-group__inner-container">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12">
              <div className="py-8">
                <div className="flex items-center">
                  <AiFillTags className="text-xl" />
                  <div>
                    <h1 className="ml-2  lg:text-4xl text-3xl lg:font-medium  text-ellipsis overflow-hidden max-h-[52px] break-words">
                      {
                        posts[0]?.PostTag.find(
                          s => s.tag.normalizedTagSlug === slug
                        )?.tag?.displayTitle
                      }
                    </h1>
                  </div>
                </div>
                <div className="flex mt-3 gap-3">
                  <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-full text-sm px-5 py-1  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Follow
                  </button>
                  <button
                    className=" relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm   px-5 py-1  disabled:bg-opacity-70 bg-pink-600 hover:bg-pink-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 dark:focus:ring-offset-0"
                    title=""
                  >
                    Write
                  </button>
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
                        Trending
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="inline-block p-4 border-b-2 font-normal border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      >
                        Latest
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        href="#"
                        className="inline-block p-4 border-b-2 font-normal border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      >
                        Writers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ListCardWrapper
                initialPosts={serializeObject(posts)}
                slug={slug}
              />
            </div>
            <div className="lg:col-span-4 border-l p-9 pt-0 hidden lg:block">
              <aside className="sticky top-[80px] self-start w-full">
                <div>
                  {/* first */}
                  <Stat
                    postCount={postCount}
                    authorCount={authorCount}
                    UsersImages={UsersImages}
                  />
                  {/* second */}
                  <RelatedTags relatedTags={relatedTags} />

                  {/* third */}
                  <TopAuthors topAuthors={topAuthors} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
