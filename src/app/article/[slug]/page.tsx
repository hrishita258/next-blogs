import BlogRenderer from '@/app/Components/Blocks/BlogRenderer'
import ListCard from '@/app/Components/Cards/ListCard'
import prisma from '../../../../prisma/client'
async function getPost(slug: string) {
  return await prisma.post.findFirst({
    where: {
      slug
    },
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
      Topics: {
        select: {
          name: true,
          slug: true
        }
      },
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
          username: true,
          name: true,
          image: true,
          id: true,
          bio: true,
          email: true,
          Post: {
            select: {
              id: true,
              title: true,
              slug: true,
              image: true,
              excerpt: true,
              createdAt: true,
              published: true,
              isFeatured: true,
              isPublic: true,
              bannerImage: true,
              primaryTopicId: true,
              authorId: true,
              updatedAt: true,
              Topics: {
                select: {
                  name: true,
                  slug: true
                }
              },
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
              PostTopics: {
                select: {
                  Topics: {
                    select: {
                      name: true,
                      slug: true,
                      id: true
                    }
                  }
                }
              }
            },
            take: 6
          }
        }
      }
    }
  })
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const data = await getPost(slug)
  return (
    <div className="relative">
      <div className="wp-block-group container">
        <div className="wp-block-group__inner-container">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12 mt-10">
              <div className="flex flex-col lg:flex-row justify-between lg:items-end space-y-5 lg:space-y-0 lg:space-x-5">
                <div
                  className="nc-PostMeta2 nc-PostMeta2-2 flex items-center text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0"
                  data-nc-id="PostMeta2"
                >
                  {' '}
                  <a
                    className="flex items-center space-x-2"
                    href="https://ncmaz.chisnghiax.com/author/hkozey/"
                  >
                    <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold  rounded-full shadow-inner h-10 w-10 sm:h-11 sm:w-11 text-xl ring-1 ring-white dark:ring-neutral-900">
                      {' '}
                      <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/franbbmqwjg-1-e1633222537415-150x150.jpg"
                        alt="Aidan"
                      />
                    </div>{' '}
                  </a>
                  <div className="ml-3">
                    <div className="flex items-center">
                      {' '}
                      <a
                        className="block font-semibold"
                        href="https://ncmaz.chisnghiax.com/author/hkozey/"
                      >
                        {' '}
                        Aidan{' '}
                      </a>
                    </div>
                    <div className="text-xs mt-[6px]">
                      {' '}
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {' '}
                        Sep 04, 2021{' '}
                      </span>{' '}
                      <span className="mx-2 font-semibold">·</span>{' '}
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {' '}
                        <span className="span-reading-time rt-reading-time">
                          <span className="rt-label rt-prefix"></span>{' '}
                          <span className="rt-time"> 3</span>{' '}
                          <span className="rt-label rt-postfix">minutes</span>
                        </span>{' '}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="single-header-meta-area nc-SingleMetaAction2 flex-shrink-0 flex flex-wrap flex-row space-x-2 sm:space-x-2.5 space-y-0.5 sm:space-y-0 items-center ">
                  <div
                    className="nc-SingleMetaAction2__views relative sm:min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 dark:text-neutral-200 dark:bg-neutral-800 flex items-center justify-center mt-0.5 sm:mt-0 px-2 h-7 sm:h-8 text-xs sm:text-sm focus:outline-none"
                    title="Views"
                  >
                    {' '}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      {' '}
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                        d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
                      ></path>{' '}
                      <circle
                        cx="12"
                        cy="12"
                        r="2.25"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.2"
                      ></circle>{' '}
                    </svg>{' '}
                    <span className="nc-SingleMetaAction2__views__number ml-1 text-neutral-900 dark:text-neutral-200">
                      4.0k
                    </span>
                  </div>{' '}
                  <a
                    className="nc-SingleMetaAction2__comments group relative sm:min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 items-center justify-center px-2 h-7 sm:h-8 text-xs sm:text-sm focus:outline-none flex"
                    title="Comments"
                    href="https://ncmaz.chisnghiax.com/quo-illum-et-alias-ea-fugit/#comments"
                  >
                    {' '}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      {' '}
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
                      ></path>{' '}
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
                      ></path>{' '}
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
                      ></path>{' '}
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
                      ></path>{' '}
                    </svg>{' '}
                    <span className="ml-1 text-neutral-900 dark:text-neutral-200 group-hover:text-teal-600">
                      {' '}
                      2{' '}
                    </span>{' '}
                  </a>
                  <div className="sm:px-1">
                    <div className="border-l border-neutral-200 dark:border-neutral-700 h-6"></div>
                  </div>
                  <div className="ncmaz-button-like-post relative text-xs sm:text-sm">
                    {' '}
                    <button
                      className="simplefavorite-button has-count"
                      data-postid="103"
                      data-siteid="1"
                      data-groupid="1"
                      data-favoritecount="26"
                    >
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>{' '}
                      <span className="simplefavorite-button-count">26</span>
                    </button>
                  </div>
                  <div
                    className="flex"
                    data-is-react-component="PostCardDropdownShare"
                    data-component-props='{"panelMenusclassName":"w-52 right-0 top-0 origin-bottom-right","href":"https:\/\/ncmaz.chisnghiax.com\/quo-illum-et-alias-ea-fugit\/","image":"https:\/\/ncmaz.chisnghiax.com\/wp-content\/uploads\/2021\/09\/pexels-photo-2662116-1.jpeg"}'
                  >
                    <div
                      className="relative inline-block text-left"
                      data-headlessui-state=""
                    >
                      <button
                        className="nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8"
                        title="Share with"
                        id="headlessui-menu-button-:r3:"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
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
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                              d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                              d="M12 14.25L12 5"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                              d="M8.75 8.25L12 4.75L15.25 8.25"
                            ></path>
                          </svg>
                          <input
                            type="text"
                            className="hidden"
                            value="https://ncmaz.chisnghiax.com/quo-illum-et-alias-ea-fugit/"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <BlogRenderer key={'hh'} data={data?.content} />

              <div className="my-9 border-b-2 pb-6">
                <div className="flex mt-4 gap-3 flex-wrap mb-5">
                  {data?.PostTag.map(tag => (
                    <div
                      className="whitespace-nowrap transition-all cursor-pointer duration-200 rounded-3xl py-2 px-4 bg-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-300 flex items-center"
                      key={tag.Tag.id}
                    >
                      {tag.Tag.displayTitle}
                    </div>
                  ))}
                </div>
              </div>
              <div
                id="comments"
                className="comments-area max-w-screen-md mx-auto mt-14"
              >
                <div id="respond" className="comment-respond">
                  <h3
                    id="reply-title"
                    className="comment-reply-title text-2xl font-bold"
                  >
                    Leave a Reply{' '}
                  </h3>
                </div>
                <h3 className="comments-title text-xl font-semibold text-neutral-800 dark:text-neutral-200 mt-10">
                  {' '}
                  2 thoughts on “<span>{data?.title}</span>”
                </h3>
                <ol className="comment-list mt-5 ">
                  <li
                    className="comment even thread-even depth-1 mb-4"
                    id="comment-247"
                  >
                    <div
                      id="div-comment-247"
                      className="comment-body nc-CommentCard flex "
                    >
                      <div className="comment-author vcard">
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base mt-4">
                          {' '}
                          <img
                            alt=""
                            src="https://secure.gravatar.com/avatar/f35344e8619c9029af98f5774fa547a8?s=32&amp;d=mm&amp;r=g"
                            srcSet="https://secure.gravatar.com/avatar/f35344e8619c9029af98f5774fa547a8?s=64&amp;d=mm&amp;r=g 2x"
                            className="avatar avatar-32 photo"
                            height="32"
                            width="32"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="relative flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700 overflow-hidden">
                        <div className="relative flex items-center pr-6">
                          <div className="comment-body__author-link flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100">
                            {' '}
                            <a
                              href="https://www.heidenreich.org/accusantium-vero-et-cumque-fugit-officii"
                              rel="external nofollow ugc"
                              className="url"
                            >
                              Ms. Amya Frami Jr.
                            </a>
                          </div>{' '}
                          <span className="comment-body__dot mx-2">·</span>{' '}
                          <a
                            className="comment-body__date text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm"
                            href="https://ncmaz.chisnghiax.com/quo-illum-et-alias-ea-fugit/#comment-247"
                          >
                            {' '}
                            Sep 05, 2021 at 2:36 pm{' '}
                          </a>
                        </div>
                        <div className="!text-sm sm:!text-base prose dark:prose-invert mt-2 mb-3 sm:mt-3 sm:mb-4">
                          <p>
                            Earum et a est tempora. Deleniti sint fugit
                            consectetur laborum. accusantium ab labore veritatis
                            voluptate Et dolorum aliquam in officia
                            exercitationem. Fugiat quod maiores voluptatibus.
                            Facere numquam quia reiciendis. harum praesentium
                            accusamus quia
                          </p>
                        </div>
                        <div className="reply flex justify-between items-center">
                          {' '}
                          <a
                            rel="nofollow"
                            className="comment-reply-link"
                            href="https://ncmaz.chisnghiax.com/quo-illum-et-alias-ea-fugit/?replytocom=247#respond"
                            data-commentid="247"
                            data-postid="103"
                            data-belowelement="div-comment-247"
                            data-respondelement="respond"
                            data-replyto="Reply to Ms. Amya Frami Jr."
                            aria-label="Reply to Ms. Amya Frami Jr."
                          >
                            <p className="inline-flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none">
                              {' '}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[18px] w-[18px] mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                ></path>
                              </svg>
                              <span className="text-xs leading-none text-neutral-900 dark:text-neutral-200">
                                Reply
                              </span>
                            </p>
                          </a>
                          <div className="absolute right-2.5 bottom-1"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className="comment odd alt thread-odd thread-alt depth-1"
                    id="comment-250"
                  >
                    <div
                      id="div-comment-250"
                      className="comment-body nc-CommentCard flex "
                    >
                      <div className="comment-author vcard">
                        <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-6 w-6 text-base mt-4">
                          {' '}
                          <img
                            alt=""
                            src="https://secure.gravatar.com/avatar/9aea5349c04ccfc9a3ccc84dfb00cd78?s=32&amp;d=mm&amp;r=g"
                            srcSet="https://secure.gravatar.com/avatar/9aea5349c04ccfc9a3ccc84dfb00cd78?s=64&amp;d=mm&amp;r=g 2x"
                            className="avatar avatar-32 photo"
                            height="32"
                            width="32"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="relative flex-grow flex flex-col p-4 ml-2 text-sm border border-neutral-200 rounded-xl sm:ml-3 sm:text-base dark:border-neutral-700 overflow-hidden">
                        <div className="relative flex items-center pr-6">
                          <div className="comment-body__author-link flex-shrink-0 font-semibold text-neutral-800 dark:text-neutral-100">
                            {' '}
                            <a
                              href="http://www.leannon.com/voluptates-sit-necessitatibus-alias.htm"
                              rel="external nofollow ugc"
                              className="url"
                            >
                              Tia Deckow
                            </a>
                          </div>{' '}
                          <span className="comment-body__dot mx-2">·</span>{' '}
                          <a
                            className="comment-body__date text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1 sm:text-sm"
                            href="https://ncmaz.chisnghiax.com/quo-illum-et-alias-ea-fugit/#comment-250"
                          >
                            {' '}
                            Sep 20, 2021 at 6:39 am{' '}
                          </a>
                        </div>
                        <div className="!text-sm sm:!text-base prose dark:prose-invert mt-2 mb-3 sm:mt-3 sm:mb-4">
                          <p>
                            Non id autem sunt repudiandae quibusdam doloremque.
                            Alias eum in dolor id vel fugit. Perspiciatis et quo
                            aliquid officia sunt nobis perspiciatis. In
                            exercitationem id eos accusantium aspernatur. Optio
                            magnam culpa illum ea. Aperiam sit laboriosam nemo
                            illum quae adipisci. Corporis voluptatem enim modi
                            nihil odit.
                          </p>
                        </div>
                        <div className="reply flex justify-between items-center">
                          {' '}
                          <a
                            rel="nofollow"
                            className="comment-reply-link"
                            href="https://ncmaz.chisnghiax.com/quo-illum-et-alias-ea-fugit/?replytocom=250#respond"
                            data-commentid="250"
                            data-postid="103"
                            data-belowelement="div-comment-250"
                            data-respondelement="respond"
                            data-replyto="Reply to Tia Deckow"
                            aria-label="Reply to Tia Deckow"
                          >
                            <p className="inline-flex items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-100 dark:text-neutral-200 dark:bg-neutral-800 px-3 h-8 hover:bg-teal-50 hover:text-teal-600 dark:hover:text-teal-500 focus:outline-none">
                              {' '}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[18px] w-[18px] mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                ></path>
                              </svg>
                              <span className="text-xs leading-none text-neutral-900 dark:text-neutral-200">
                                Reply
                              </span>
                            </p>
                          </a>
                          <div className="absolute right-2.5 bottom-1"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-gray-100 mt-6 px-4 py-6">
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <h3 className="text-xl font-bold">
                      More from {data?.author?.name}
                    </h3>
                    <p className="text-sm"> {data?.author?.bio}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Follow
                    </button>
                  </div>
                </div>
                <div className="">
                  {data?.author?.Post?.map(post => (
                    <ListCard
                      key={post?.id}
                      post={{
                        ...post,
                        content: '',
                        author: null,
                        isPremium: false
                      }}
                      slug={post?.Topics?.slug || ''}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 border-l p-9 pt-0 hidden lg:block">
              <aside className="sticky top-[80px] self-start w-full"></aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
