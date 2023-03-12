import React from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
interface Props {
  title: string
  subtitle: string
  background?: string
  slider?: Boolean
  children?: React.ReactNode
  handleSwiperNavigation?: (
    direction: string,
    prevId: string,
    nextId: string,
    swiperState: any
  ) => void
  swiperElement?: any
}

const Section = ({
  title,
  subtitle,
  slider = false,
  children,
  background,
  handleSwiperNavigation,
  swiperElement
}: Props) => {
  return (
    <div>
      <div className=" relative py-14 sm:py-16 ">
        <div
          className={` absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2  z-0 ${background} dark:bg-black dark:bg-opacity-20`}
        ></div>
        <div className="relative">
          <div className=" relative ">
            <div className="flow-root">
              <div className=" relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-14 text-neutral-900 dark:text-neutral-50">
                <div className="max-w-2xl">
                  <h3 className="text-2xl   font-semibold">{title}</h3>
                  <span className="mt-2 md:mt-3 font-normal block text-base md:text-lg text-neutral-500 dark:text-neutral-400">
                    {subtitle}
                  </span>
                </div>
                {slider ? (
                  <div className="mt-4 hidden sm:flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
                    <div className="nc-NextPrev flex items-center text-neutral-900 dark:text-neutral-300 space-x-2 relative">
                      <button
                        className="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                        title="Prev"
                        id="topWritersPrev"
                        onClick={() => {
                          if (handleSwiperNavigation) {
                            handleSwiperNavigation(
                              'prev',
                              'topWritersPrev',
                              'topWritersNext',
                              swiperElement
                            )
                          }
                        }}
                      >
                        <FcPrevious />
                      </button>
                      <button
                        className="w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none"
                        title="Next"
                        id="topWritersNext"
                        onClick={() => {
                          if (handleSwiperNavigation) {
                            handleSwiperNavigation(
                              'next',
                              'topWritersPrev',
                              'topWritersNext',
                              swiperElement
                            )
                          }
                        }}
                      >
                        <FcNext />
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section
