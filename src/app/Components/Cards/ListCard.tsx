'use client'

import { formatDate } from '@/Utils/formatDate'
import { Post } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  post: PostWithTags
  slug: string
}

interface PostWithTags extends Post {
  PostTag: {
    Tag: {
      id: string
      displayTitle: string
      normalizedTagSlug: string
    }
  }[]
  PostTopics: {
    Topics: {
      id: string
      name: string
      slug: string
    }
  }[]

  author: {
    id: string
    image: string | null
    name: string
  } | null
}
const ListCard = ({ post, slug }: Props) => {
  return (
    <div
      key={post.id}
      className="relative flex group flex-row items-center p-3 sm:p-4 border-b mb-4"
    >
      <Link
        key={post.id}
        href={'/article/' + post?.slug}
        className="absolute inset-0 z-0"
      ></Link>
      <div className="flex flex-col flex-grow" key={post.id}>
        <div className="space-y-2 sm:space-y-3 sm:mb-4">
          <div className="nc-CategoryBadgeList flow-root ">
            <div className="flex flex-wrap space-x-2 -my-1 ">
              <a
                href="https://ncmaz.chisnghiax.com/category/garden/"
                className="transition-colors py-0.5  hover:text-white duration-300 nc-Badge inline-flex lg:py-1 rounded-full   relative  px-3 my-1 text-xs text-blue-800 bg-blue-100 hover:bg-blue-800"
              >
                {
                  post?.PostTopics?.find(s => s.Topics.slug === slug)?.Topics
                    ?.name
                }
              </a>
            </div>
          </div>
          <h3 className="block font-semibold text-sm sm:text-lg nc-card-title">
            <Link href={'/article/' + post?.slug} className="line-clamp-2 ">
              {post?.title}
            </Link>
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base line-clamp-3">
            {post?.excerpt}
          </p>
          <div className="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none">
            {post.author ? (
              <>
                <Link
                  href={'/article/' + post?.slug}
                  className="flex-shrink-0 relative flex items-center space-x-2 "
                >
                  <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                    <Image
                      className="absolute inset-0 w-full h-full object-cover"
                      src={post?.author?.image || ''}
                      sizes="100px"
                      alt="monty99"
                      loading="lazy"
                      fill
                    />
                    <span className="wil-avatar__name">
                      {post?.author?.name.at(0)}
                    </span>
                  </div>
                  <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium ">
                    <span className="line-clamp-1">{post.author?.name}</span>
                  </span>
                </Link>
                <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                  ·
                </span>
              </>
            ) : null}
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
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="simplefavorite-button-count">87</span>
              </button>
            </div>
            <a
              href="https://ncmaz.chisnghiax.com/ut-non-rerum-quia-ea/#comments"
              className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
              title="Comments"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
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
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
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
      {post?.bannerImage ? (
        <div className="flex-shrink-0 ml-3 w-4/12 sm:w-24 md:w-40">
          <Link
            href={'/article/' + post?.slug}
            className="w-full block h-0 aspect-h-16 aspect-w-16 rounded-md sm:rounded-xl overflow-hidden z-0"
          >
            <div className="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlOk">
              <Image
                src={post?.bannerImage || ''}
                alt="DIYer and TV host Trisha Hershberger’s journey through"
                className="object-cover w-full h-full group-hover:scale-105 duration-500 transition-transform"
                loading="lazy"
                fill
                sizes="(max-width: 475px) 100vw, 475px"
              />
            </div>
            <span>
              <div className="nc-PostTypeFeaturedIcon absolute left-1 bottom-1 sm:left-2 sm:bottom-2"></div>
            </span>
          </Link>
        </div>
      ) : null}
    </div>
  )
}
export default ListCard
