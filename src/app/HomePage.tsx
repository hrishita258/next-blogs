'use client'

import { Tag } from '@prisma/client'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

import { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import BecomeAuthor from './Components/Blocks/BecomeAuthor'
import NewsLetter from './Components/Blocks/NewsLetter'
import ArticleCard from './Components/Cards/ArticleCard'
import Section from './Components/Section'
import HandleSwiperNavigations from './Components/SwiperNavigation'

interface Props {
  posts: any
  users: any
  tags: any
}

const HomePage = ({ users, posts, tags }: Props) => {
  const [homeComponentData, setHomeComponentData] = useState({
    posts: JSON.parse(posts),
    users: JSON.parse(users),
    tags: JSON.parse(tags)
  })

  const [swiperState, setSwiperState] = useState<any>(null)

  return (
    <main className="pb-16 relative overflow-hidden">
      <div
        className="nc-BgGlassmorphism absolute inset-x-0 md:top-10 xl:top-20 min-h-0 pl-20 py-24 flex overflow-hidden z-0"
        data-nc-id="BgGlassmorphism"
      >
        <span className="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 nc-animation-delay-2000"></span>
      </div>
      <div className="relative">
        <div className="wp-block-group container">
          <div className="wp-block-group__inner-container">
            {/* first  */}
            <Section
              title={'Trending Posts 📈'}
              subtitle={
                ' Dolorem rerum error assumenda temporibus quo voluptas'
              }
            >
              <div className="SectionMagazine5 ">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
                  <div
                    className="nc-Card12 group relative flex flex-col h-full"
                    data-nc-id="Card12"
                  >
                    <a
                      href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                      className="block flex-shrink-0 relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden z-0"
                    >
                      <div
                        className="nc-NcImage absolute inset-0 overflow-hidden z-0 mabeUrlOk"
                        data-nc-id="NcImage"
                      >
                        <Image
                          src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-5945625.jpeg"
                          alt="Doloremque magnam saepe deserunt"
                          className="object-cover w-full h-full"
                          loading="lazy"
                          width={1}
                          height={1}
                          sizes="(maxWidth: 768px) 100vw, 768px"
                        />
                      </div>
                      <span>
                        <div
                          className="nc-PostTypeFeaturedIcon absolute bottom-2 left-2"
                          data-nc-id="PostTypeFeaturedIcon"
                        >
                          <span className="bg-neutral-900/60 rounded-full flex items-center justify-center text-xl text-white border border-white w-8 h-8">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </span>
                    </a>
                    <div
                      className="nc-SocialsShare absolute hidden md:grid gap-0.5 right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300"
                      data-nc-id="SocialsShare"
                    >
                      <div>
                        <button
                          aria-label="facebook"
                          className="react-share__ShareButton hover:opacity-70"
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            padding: '0px',
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer'
                          }}
                        >
                          <svg viewBox="0 0 64 64" width="24" height="24">
                            <circle
                              cx="32"
                              cy="32"
                              r="31"
                              fill="#3b5998"
                            ></circle>
                            <path
                              d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                              fill="white"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div>
                        <button
                          aria-label="twitter"
                          className="react-share__ShareButton hover:opacity-70"
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            padding: '0px',
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer'
                          }}
                        >
                          <svg viewBox="0 0 64 64" width="24" height="24">
                            <circle
                              cx="32"
                              cy="32"
                              r="31"
                              fill="#00aced"
                            ></circle>
                            <path
                              d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                              fill="white"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div>
                        <button
                          aria-label="telegram"
                          className="react-share__ShareButton hover:opacity-70"
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            padding: '0px',
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer'
                          }}
                        >
                          <svg viewBox="0 0 64 64" width="24" height="24">
                            <circle
                              cx="32"
                              cy="32"
                              r="31"
                              fill="#37aee2"
                            ></circle>
                            <path
                              d="m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
                              fill="white"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div>
                        <button
                          aria-label="whatsapp"
                          className="react-share__ShareButton hover:opacity-70"
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            padding: '0px',
                            font: 'inherit',
                            color: 'inherit',
                            cursor: 'pointer'
                          }}
                        >
                          <svg viewBox="0 0 64 64" width="24" height="24">
                            <circle
                              cx="32"
                              cy="32"
                              r="31"
                              fill="#25D366"
                            ></circle>
                            <path
                              d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                              fill="white"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-8 max-w-xl flex flex-col">
                      <h3 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-base sm:text-lg lg:text-2xl">
                        <a
                          href="https://ncmaz.chisnghiax.com/doloremque-magnam-saepe-deserunt/"
                          className="line-clamp-2"
                          title="Doloremque magnam saepe deserunt"
                        >
                          Doloremque magnam saepe deserunt
                        </a>
                      </h3>
                      <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
                        <span className="line-clamp-2">
                          <p>
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages
                          </p>
                        </span>
                      </span>
                      <div
                        className="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs mt-2 sm:mt-5"
                        data-nc-id="PostCardMeta"
                      >
                        <a
                          href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                          className="flex-shrink-0 relative flex items-center space-x-2 "
                        >
                          <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                            <Image
                              className="absolute inset-0 w-full h-full object-cover"
                              src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/if9tk5uy-ki-1-e1633222611780.jpg"
                              sizes="100px"
                              alt="pcormier"
                              loading="lazy"
                              height={1}
                              width={1}
                            />
                            <span className="wil-avatar__name">p</span>
                          </div>
                          <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium ">
                            <span className="line-clamp-1"> Frederique</span>
                          </span>
                        </a>
                        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                          ·
                        </span>
                        <span className="text-neutral-500 dark:text-neutral-400 font-normal ">
                          <span className="line-clamp-1">Sep 24, 2021</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-5 md:space-y-7">
                    <div className="w-full">
                      <div
                        className="nc-Card13 relative flex justify-between "
                        data-nc-id="Card13"
                      >
                        <div className="flex flex-1 flex-col md:py-2">
                          <h3 className="nc-card-title block font-semibold text-sm md:text-base">
                            <a
                              href="https://ncmaz.chisnghiax.com/eos-adipisci-dolorem-quia-qui/"
                              className="line-clamp-2"
                              title="Eos adipisci dolorem quia qui"
                            >
                              Eos adipisci dolorem quia qui
                            </a>
                          </h3>
                          <span className="hidden md:block my-3 text-sm lg:text-base text-neutral-500 dark:text-neutral-400 ">
                            <span className="line-clamp-2">
                              <p>
                                It has survived not only five centuries, but
                                also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages
                              </p>
                            </span>
                          </span>
                          <span className="mt-4 block sm:hidden text-xs text-neutral-500 ">
                            Sep 25, 2021
                          </span>
                          <div className="mt-auto hidden sm:block">
                            <div
                              className="nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 overflow-hidden text-xs leading-none"
                              data-nc-id="PostCardMeta"
                            >
                              <a
                                href="https://ncmaz.chisnghiax.com/author/hkozey/"
                                className="flex-shrink-0 relative flex items-center space-x-2 "
                              >
                                <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm ring-1 ring-white/80 dark:ring-neutral-900">
                                  <Image
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/franbbmqwjg-1-e1633222537415.jpg"
                                    sizes="100px"
                                    alt="jean.kuhic"
                                    loading="lazy"
                                    width={1}
                                    height={1}
                                  />
                                  <span className="wil-avatar__name">j</span>
                                </div>
                                <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium ">
                                  <span className="line-clamp-1"> Aidan</span>
                                </span>
                              </a>
                              <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
                                ·
                              </span>
                              <span className="text-neutral-500 dark:text-neutral-400 font-normal ">
                                <span className="line-clamp-1">
                                  Sep 25, 2021
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="block relative flex-shrink-0 w-4/12 sm:w-28 md:w-36 xl:w-48 ml-3 sm:ml-5">
                          <a
                            href="https://ncmaz.chisnghiax.com/eos-adipisci-dolorem-quia-qui/"
                            className="w-full block h-0 aspect-h-1 aspect-w-1 rounded-md sm:rounded-xl overflow-hidden z-0"
                          >
                            <div
                              className="nc-NcImage absolute inset-0  overflow-hidden z-0 mabeUrlOk"
                              data-nc-id="NcImage"
                            >
                              <Image
                                src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3800412-1.jpeg"
                                alt="Eos adipisci dolorem quia qui"
                                className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
                                loading="lazy"
                                sizes="(maxWidth: 475px) 100vw, 475px"
                                width={1}
                                height={1}
                              />
                            </div>
                            <div>
                              <div
                                className="nc-PostTypeFeaturedIcon absolute bottom-2 left-2"
                                data-nc-id="PostTypeFeaturedIcon"
                              ></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* second */}
            <Section
              title={'Newest authors 🥉'}
              subtitle={'Say hello to future creator potentials'}
              slider
              background="bg-neutral-100"
              handleSwiperNavigation={HandleSwiperNavigations}
              swiperElement={swiperState}
            >
              <div className="flex">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={16}
                  pagination={{ clickable: true }}
                  navigation={true}
                  breakpoints={{
                    390: {
                      slidesPerView: 2
                    },
                    550: {
                      slidesPerView: 2
                    },
                    640: {
                      slidesPerView: 3
                    },
                    1024: {
                      slidesPerView: 4
                    },
                    1280: {
                      slidesPerView: 5
                    },
                    1536: {
                      slidesPerView: 6
                    }
                  }}
                  modules={[Pagination, Navigation]}
                  onSwiper={s => setSwiperState(s)}
                >
                  {homeComponentData?.users?.map((user: any) => (
                    <SwiperSlide key={user.id}>
                      <div key={user.id}>
                        <a
                          href="https://ncmaz.chisnghiax.com/author/jaren-nader/"
                          className=" flex flex-col overflow-hidden [ nc-box-has-hover nc-dark-box-bg-has-hover ] hover:!shadow-none"
                        >
                          <div className="relative flex-shrink-0 ">
                            <div>
                              <div className="nc-NcImage flex aspect-w-8 sm:aspect-w-7 aspect-h-5 w-full h-0 overflow-hidden z-0 mabeUrlOk">
                                <Image
                                  alt="nc-imgs"
                                  className="object-cover w-full h-full"
                                  loading="lazy"
                                  width={1}
                                  height={1}
                                  src={
                                    'https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-3330118.jpeg'
                                  }
                                />
                              </div>
                            </div>
                            <div className="absolute top-3 inset-x-3 flex">
                              <div className=" py-1 px-4 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center leading-none text-xs font-medium">
                                {user?._count.posts}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 ml-3"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="-mt-5 sm:-mt-7 mx-2 mb-5 sm:mb-7 text-center">
                            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-10 h-10 sm:w-14 sm:h-14 text-2xl ring-2 ring-white">
                              <Image
                                className="absolute inset-0 w-full h-full object-cover"
                                src={user.image || ''}
                                alt="pcormier"
                                loading="lazy"
                                width={1}
                                height={1}
                              />
                              <span className="wil-avatar__name">p</span>
                            </div>
                            <div className="mt-3">
                              <h4 className="text-base font-medium">
                                <span className="line-clamp-1">
                                  {user.name}
                                </span>
                              </h4>
                              <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                                UX Designer
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Section>

            {/* third */}
            <Section
              title={' Top trending topics 🎨'}
              subtitle={` Discover over ${homeComponentData?.tags?.length} topics`}
              slider
            >
              <Swiper
                slidesPerView={2}
                spaceBetween={16}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                  390: {
                    slidesPerView: 2
                  },
                  550: {
                    slidesPerView: 2
                  },
                  640: {
                    slidesPerView: 3
                  },
                  1024: {
                    slidesPerView: 4
                  },
                  1280: {
                    slidesPerView: 5
                  },
                  1536: {
                    slidesPerView: 6
                  }
                }}
              >
                {homeComponentData?.tags?.map((tag: Tag) => (
                  <SwiperSlide key={tag.id}>
                    <li key={tag.id} className="!h-auto">
                      <a
                        href="https://ncmaz.chisnghiax.com/category/photos/"
                        className="nc-CardCategory4 flex flex-col "
                        data-nc-id="CardCategory4"
                      >
                        <div className="flex-shrink-0 relative w-full aspect-w-7 aspect-h-5 h-0 rounded-3xl overflow-hidden z-0 group">
                          <div
                            className="nc-NcImage  overflow-hidden z-0 mabeUrlOk"
                            data-nc-id="NcImage"
                          >
                            <Image
                              src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-250591-2.jpeg"
                              alt="Photos"
                              className="object-cover w-full h-full rounded-2xl"
                              loading="lazy"
                              width={1}
                              height={1}
                              sizes="(max-width: 475px) 100vw, 475px"
                            />
                          </div>
                          <div>
                            <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-indigo-800 bg-indigo-100  absolute top-3 left-3">
                              #1
                            </span>
                          </div>
                          <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
                        </div>
                        <div className="flex items-center mt-2.5 sm:mt-5">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-indigo-500 rounded-full"></div>
                          <div className="ml-3 truncate">
                            <h3 className="text-base text-neutral-700 dark:text-neutral-100 font-medium truncate">
                              {tag.displayTitle}
                            </h3>
                            <span className="block sm:mt-1 text-sm text-neutral-6000 dark:text-neutral-400">
                              {(tag as any)._count?.PostTag} Articles
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Section>

            {/* fourth */}
            <Section
              title={' Hot topics 🎲'}
              subtitle={' Discover more 200 topics'}
              background={'bg-neutral-100'}
              slider
            >
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <li
                    className="glide__slide !h-auto"
                    style={{ width: '227px', marginRight: '16px' }}
                  >
                    <a
                      href="https://ncmaz.chisnghiax.com/category/education/"
                      className="nc-CardCategory3 flex flex-col "
                      data-nc-id="CardCategory3"
                    >
                      <div className="flex-shrink-0 relative w-full aspect-w-5 aspect-h-4 sm:aspect-h-5 h-0 rounded-2xl overflow-hidden z-0 group">
                        <div
                          className="nc-NcImage  overflow-hidden z-0 mabeUrlOk"
                          data-nc-id="NcImage"
                        >
                          <Image
                            src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/o2u6ga2esai-1.jpg"
                            alt="Education"
                            className="osbject-cover w-full h-full rounded-2xl"
                            loading="lazy"
                            sizes="(max-width: 475px) 100vw, 475px"
                            width={1}
                            height={1}
                          />
                        </div>
                        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
                      </div>
                      <div className="mt-3 truncate pl-2.5">
                        <h4 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold truncate">
                          Education
                        </h4>
                        <span className="block mt-1 text-sm text-neutral-6000 dark:text-neutral-400">
                          5 Articles
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </Section>

            {/* fifth */}
            <Section
              title={'Featured Articles 🧬'}
              subtitle={'This is sub-heading of section'}
              slider
            >
              <Swiper
                slidesPerView={2}
                spaceBetween={16}
                breakpoints={{
                  390: {
                    slidesPerView: 1
                  },
                  550: {
                    slidesPerView: 2
                  },
                  640: {
                    slidesPerView: 2
                  },
                  1024: {
                    slidesPerView: 3
                  },
                  1280: {
                    slidesPerView: 3
                  },
                  1536: {
                    slidesPerView: 4
                  }
                }}
              >
                {homeComponentData?.posts
                  ?.filter((p: any) => p.isFeatured)
                  ?.map((post: any) => (
                    <SwiperSlide key={post.id}>
                      <li className="!h-auto">
                        <div className="nc-Card7 relative flex flex-col group rounded-lg sm:rounded-3xl z-0 overflow-hidden  h-full">
                          <div className="ncmaz-button-like-post hidden sm:block absolute top-3 right-3 z-10">
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
                              <span className="simplefavorite-button-count">
                                16
                              </span>
                            </button>
                          </div>
                          <a
                            href="https://ncmaz.chisnghiax.com/quae-quis-vel-sit/"
                            className="flex items-start relative w-full aspect-h-5 aspect-w-5 sm:aspect-h-6"
                          >
                            <div className="nc-NcImage absolute inset-0 overflow-hidden z-0  mabeUrlOk">
                              <Image
                                src={post.bannerImage}
                                alt="Quae quis vel sit"
                                className="object-cover w-full h-full rounded-lg sm:rounded-3xl "
                                loading="lazy"
                                sizes="(max-width: 475px) 100vw, 475px"
                                width={1}
                                height={1}
                              />
                            </div>
                            <div className="nc-PostTypeFeaturedIcon absolute top-3 left-3">
                              <span className="bg-neutral-900/60 rounded-full flex items-center justify-center text-xl text-white border border-white w-7 h-7">
                                <svg
                                  className="w-4 h-4"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <span className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          </a>
                          <div className="absolute bottom-2 sm:bottom-3 inset-x-2 sm:inset-x-3 p-2.5 sm:p-4 bg-white dark:bg-neutral-900 flex flex-col flex-grow rounded-lg sm:rounded-3xl group-hover:shadow-2xl transition-shadow">
                            <a
                              href="https://ncmaz.chisnghiax.com/quae-quis-vel-sit/"
                              className="absolute inset-0"
                            ></a>
                            <div className="space-y-2.5 mb-3">
                              <div className="hidden sm:block">
                                <div className="nc-CategoryBadgeList flow-root ">
                                  <div className="flex flex-wrap space-x-2 -my-1 ">
                                    <a
                                      href="https://ncmaz.chisnghiax.com/category/photos/"
                                      className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-indigo-800 bg-indigo-100 hover:bg-indigo-800"
                                    >
                                      Photos
                                    </a>
                                    <a
                                      href="https://ncmaz.chisnghiax.com/category/uncategorized/"
                                      className="transition-colors hover:text-white duration-300 nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative my-1 text-[10px] sm:text-xs  text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                                    >
                                      Uncategorized
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <h3 className="block text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 ">
                                <a
                                  href="https://ncmaz.chisnghiax.com/quae-quis-vel-sit/"
                                  className="line-clamp-2"
                                  title="Quae quis vel sit"
                                >
                                  {post.title}
                                </a>
                              </h3>
                            </div>
                            <a
                              href="https://ncmaz.chisnghiax.com/author/admin/"
                              className="nc-CardAuthor2 relative inline-flex items-center overflow-hidden"
                              data-nc-id="CardAuthor2"
                            >
                              <div className="wil-avatar relative inline-flex items-center justify-center overflow-hidden z-0 text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-8 w-8 sm:h-9 sm:w-9 text-base flex-shrink-0 mr-3">
                                <Image
                                  className="absolute inset-0 w-full h-full object-cover"
                                  src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/v-bw-tdto2c-1-e1633222451952.jpg"
                                  width={1}
                                  height={1}
                                  sizes="100px"
                                  alt="admin"
                                  loading="lazy"
                                />
                                <span className="wil-avatar__name">a</span>
                              </div>
                              <div className="overflow-hidden">
                                <h4 className="text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate">
                                  admin
                                </h4>
                                <span className="flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400 truncate">
                                  <span>Sep 02, 2021</span>
                                  <span className="hidden lg:inline mx-1 transition-opacity ">
                                    ·
                                  </span>
                                  <span className="hidden lg:inline transition-opacity truncate ">
                                    <span className="span-reading-time rt-reading-time">
                                      <span className="rt-label rt-prefix"></span>{' '}
                                      <span className="rt-time"> 3</span>{' '}
                                      <span className="rt-label rt-postfix">
                                        minutes
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Section>

            {/* sixth */}
            <BecomeAuthor
              title={''}
              subtitle={''}
              description={''}
              background={''}
              image={''}
            />

            {/* seventh */}
            <Section
              title={'Latest Articles 🎈'}
              subtitle={
                'Discover the most outstanding articles in all topics of life.'
              }
            >
              <div className="grid gap-x-2.5 gap-y-4 sm:gap-6 2xl:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {homeComponentData?.posts?.map((post: any) => (
                  <ArticleCard post={post} key={post.id} />
                ))}
              </div>
            </Section>

            {/* eighth */}
            <NewsLetter
              title={''}
              subtitle={''}
              image={''}
              background={''}
              List={[]}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export default HomePage
