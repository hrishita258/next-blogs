interface Props {
  title: string
  subtitle: string
  description: string
  background: string
  image: string
}
const BecomeAuthor = (Props: Props) => {
  return (
    <div className="wp-block-ncmaz-core-block-become-author">
      <div className="relative py-16">
        <div className="nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20 "></div>
        <div
          className="nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  "
          data-nc-id="SectionBecomeAnAuthor"
        >
          <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
            <span className="text-xs uppercase tracking-wider font-medium text-neutral-400">
              supper change your planning powers
            </span>
            <h2 className="font-semibold text-3xl sm:text-4xl mt-3">
              Become an author and share your great stories
            </h2>
            <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
              Become an author you can earn extra income by writing articles.
              Read and share new perspectives on just about any topic.
              Everyone’s welcome.
            </span>
            <a
              href="/#"
              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors focus:outline-none text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 mt-8  "
              rel="noopener noreferrer"
            >
              Become an author
            </a>
          </div>
          <div className="flex-grow">
            <img
              decoding="async"
              className="max-w-full"
              src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/BecomeAnAuthorImg.02703848-2.png"
              alt="become an author image"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BecomeAuthor
