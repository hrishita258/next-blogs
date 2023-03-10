import { formatDate } from '@/Utils/formatDate'
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
    }
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

  return { posts, relatedTags, topAuthors }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const { posts, relatedTags, topAuthors } = await getPostsByTag(slug)
  const UsersImages = topAuthors.map(user => user.image)

  // console.log(JSON.stringify({ posts, relatedTags, topAuthors }))

  return (
    <div className="relative">
      <div className="wp-block-group container">
        <div className="wp-block-group__inner-container">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12">
              <div className="py-5">
                <div className="flex items-center">
                  <AiFillTags className="text-xl" />
                  <div>
                    <h1 className="ml-2  lg:text-4xl text-3xl lg:font-medium  text-ellipsis overflow-hidden max-h-[52px] break-words uppercase">
                      {slug}
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
              {posts.map(post => (
                <div
                  key={post.id}
                  className="relative flex group flex-row items-center p-3 sm:p-4 border-b mb-4"
                >
                  <a
                    href="https://ncmaz.chisnghiax.com/ut-non-rerum-quia-ea/"
                    className="absolute inset-0 z-0"
                  ></a>
                  <div className="flex flex-col flex-grow">
                    <div className="space-y-2 sm:space-y-3 sm:mb-4">
                      <div className="nc-CategoryBadgeList flow-root ">
                        <div className="flex flex-wrap space-x-2 -my-1 ">
                          <a
                            href="https://ncmaz.chisnghiax.com/category/garden/"
                            className="transition-colors py-0.5  hover:text-white duration-300 nc-Badge inline-flex lg:py-1 rounded-full lg:font-medium  relative  px-3 my-1  text-sm  text-blue-800 bg-blue-100 hover:bg-blue-800"
                          >
                            {
                              post?.PostTag.find(
                                s => s.tag.normalizedTagSlug === slug
                              )?.tag?.displayTitle
                            }
                          </a>
                        </div>
                      </div>
                      <h3 className="block font-semibold text-sm sm:text-base nc-card-title">
                        <a
                          href="https://ncmaz.chisnghiax.com/ut-non-rerum-quia-ea/"
                          className="line-clamp-2 "
                          title="DIYer and TV host Trisha Hershberger’s journey through"
                        >
                          {post?.title}
                        </a>
                      </h3>
                      <div className="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none">
                        <a
                          href="https://ncmaz.chisnghiax.com/author/bayer-fredy/"
                          className="flex-shrink-0 relative flex items-center space-x-2 "
                        >
                          <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                            <img
                              className="absolute inset-0 w-full h-full object-cover"
                              src={post?.bannerImage || ''}
                              sizes="100px"
                              alt="monty99"
                              loading="lazy"
                            />
                            <span className="wil-avatar__name">m</span>
                          </div>
                          <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium ">
                            <span className="line-clamp-1">
                              {post.author?.name}
                            </span>
                          </span>
                        </a>
                        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                          ·
                        </span>
                        <span className="text-neutral-500 dark:text-neutral-400 font-normal ">
                          <span className="line-clamp-1">
                            {formatDate(post?.createdAt as any)}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center flex-wrap justify-between mt-auto">
                      <div className="nc-PostCardLikeAndComment flex items-center space-x-2 relative">
                        <div className="ncmaz-button-like-post relative">
                          <button className="simplefavorite-button active has-count">
                            <svg
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span className="simplefavorite-button-count">
                              87
                            </span>
                          </button>
                        </div>
                        <a
                          href="https://ncmaz.chisnghiax.com/ut-non-rerum-quia-ea/#comments"
                          className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                          title="Comments"
                        >
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                            ></path>
                          </svg>
                          <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                            2
                          </span>
                        </a>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ">
                        <span>
                          <span className="span-reading-time rt-reading-time">
                            <span className="rt-label rt-prefix"></span>{' '}
                            <span className="rt-time"> 3</span>{' '}
                            <span className="rt-label rt-postfix">minutes</span>
                          </span>
                        </span>
                        <div className="relative inline-block text-left">
                          <button
                            className="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                            title="Share with"
                            id="headlessui-menu-button-:rc:"
                            type="button"
                          >
                            <div>
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                  d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                                ></path>
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                  d="M12 14.25L12 5"
                                ></path>
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1"
                                  d="M8.75 8.25L12 4.75L15.25 8.25"
                                ></path>
                              </svg>
                              <input type="text" className="hidden" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-3 w-4/12 sm:w-24 md:w-40">
                    <a
                      href="https://ncmaz.chisnghiax.com/ut-non-rerum-quia-ea/"
                      className="w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-xl overflow-hidden z-0"
                    >
                      <div className="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlOk">
                        <img
                          src={post?.author?.image || ''}
                          alt="DIYer and TV host Trisha Hershberger’s journey through"
                          className="object-cover w-full h-full group-hover:scale-105 duration-500 transition-transform"
                          loading="lazy"
                          sizes="(max-width: 475px) 100vw, 475px"
                        />
                      </div>
                      <span>
                        <div className="nc-PostTypeFeaturedIcon absolute left-1 bottom-1 sm:left-2 sm:bottom-2"></div>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-4 border-l p-9 hidden lg:block">
              <aside className="sticky top-[80px] self-start w-full">
                <div>
                  {/* first */}
                  <div className="mt-10 pb-10 border-b border-b-[rgba(230, 230, 230, 1)]">
                    <div className="flex">
                      <div className="flex-auto block">
                        <div className="block">
                          <h2 className="text-2xl font-bold">217K</h2>
                        </div>
                        <div className="mt-2 block font-normal">Stories</div>
                      </div>
                      <div className="flex-auto block">
                        <div className="block">
                          <h2 className="text-2xl font-bold">77K</h2>
                        </div>
                        <div className="mt-2 block font-normal">Writers</div>
                      </div>
                    </div>
                    <div className="flex -space-x-2 overflow-hidden mt-4">
                      {UsersImages.map(src => (
                        <img
                          key={src}
                          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                          src={src || ''}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                  {/* second */}
                  <div className="mt-10">
                    <div className="pb-4 block">
                      <h2 className="text-[18px] text-gray-900 font-medium">
                        Related Topics
                      </h2>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      {relatedTags.map(topic => (
                        <div
                          key={topic.id}
                          className="py-1.5 px-5 text-sm  text-gray-800 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-pink-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:cursor-pointer hover:border-pink-600"
                        >
                          {topic?.displayTitle}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* third */}
                  <div className="mt-10">
                    <div className="pb-4 block">
                      <h2 className="text-[18px] text-gray-900 font-medium">
                        Top Writers
                      </h2>
                    </div>
                    <div className=""></div>
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
