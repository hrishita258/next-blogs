import { formatDate } from '@/Utils/formatDate'
import Image from 'next/image'

interface PostWithAuthorAndTags {
  id: string
  title: string
  content: string
  slug: string
  published: boolean
  image: string
  bannerImage: string
  isPremium: boolean
  isFeatured: boolean
  isPublic: boolean
  authorId: string
  createdAt: string
  updatedAt: string
  author: {
    id: string
    name: string
    email: string
    password: string
    bio: string
    image: string
    createdAt: string
    updatedAt: string
  }
  tags: {
    normalizedTagSlug: string
    displayTitle: string
    id: string
  }[]
  _count: {
    likes: number
  }
}

interface Props {
  post: PostWithAuthorAndTags
}

const ArticleCard = ({ post }: Props) => {
  return (
    <div key={post.id} className="nc-Card10V2 relative flex flex-col h-full">
      <div className="block group rounded-xl sm:rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-9 overflow-hidden z-0">
        <div>
          <div className="nc-PostFeaturedMedia relative w-full h-full standardnotFeaturedImage">
            <a
              href="https://ncmaz.chisnghiax.com/placeat-omnis-alias-quia-nihil-distinctio/"
              className="absolute inset-0 group-hover:opacity-90 transition-opacity"
            >
              <div className="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlOk">
                <Image
                  src={post.bannerImage || ''}
                  className="object-cover w-full h-full"
                  alt={post.slug}
                  loading="lazy"
                  width={1}
                  height={1}
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
            </a>
          </div>
        </div>
        <a
          href="https://ncmaz.chisnghiax.com/placeat-omnis-alias-quia-nihil-distinctio/"
          className="absolute block inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"
        ></a>
      </div>
      <div className="hidden absolute top-3 inset-x-3 sm:flex justify-between items-start space-x-4 z-10">
        <div className="nc-CategoryBadgeList flow-root ">
          <div className="flex flex-wrap space-x-2 -my-1 ">
            {post?.tags?.slice(0, 2)?.map(tag => (
              <a
                key={tag.id}
                href="https://ncmaz.chisnghiax.com/category/education/"
                className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-red-800 bg-red-100 hover:bg-red-800"
              >
                {tag.displayTitle}
              </a>
            ))}
            <a
              href="https://ncmaz.chisnghiax.com/category/sports/"
              className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-blue-800 bg-blue-100 hover:bg-blue-800"
            >
              Sports
            </a>
          </div>
        </div>
        <div className="ncmaz-button-like-post relative">
          {/* <button className="simplefavorite-button active has-count">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
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
            <span className="simplefavorite-button-count">31</span>
          </button> */}
          <button className="simplefavorite-button has-count">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                clipRule="evenodd"
              ></path>
            </svg>{' '}
            <span className="simplefavorite-button-count">
              {post?._count?.likes}
            </span>
          </button>
        </div>
      </div>
      <div className="space-y-2.5 mt-4 sm:px-2.5">
        <div className="nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none">
          <div className="relative flex sm:space-x-2 overflow-hidden">
            <a
              className="hidden sm:flex flex-shrink-0 pt-1"
              href="https://ncmaz.chisnghiax.com/author/admin/"
            >
              <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-9 w-9 text-base ring-1 ring-white/80 dark:ring-neutral-900">
                <Image
                  className="absolute inset-0 w-full h-full object-cover"
                  src={post.bannerImage || ''}
                  alt={'admin'}
                  loading="lazy"
                  width={1}
                  height={1}
                  sizes="100px"
                />
                <span className="wil-avatar__name">a</span>
              </div>
            </a>
            <a
              href="https://ncmaz.chisnghiax.com/placeat-omnis-alias-quia-nihil-distinctio/"
              className="grid grid-cols-1 overflow-hidden"
            >
              <h4 className="block font-semibold nc-card-title text-sm sm:text-base">
                <span className="line-clamp-2">{post.title}</span>
              </h4>
              <div className="flex mt-1.5 truncate">
                <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate">
                  {post.author.name}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                  ·
                </span>
                <span className="text-neutral-500 dark:text-neutral-400 font-normal flex-shrink-0">
                  {formatDate(post?.createdAt)}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ArticleCard
