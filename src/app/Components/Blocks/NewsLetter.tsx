interface Props {
  title: string
  subtitle: string
  image: string
  background: string
  List: {
    text: string
  }[]
}

const NewsLetter = (Props: Props) => {
  return (
    <div className="wp-block-ncmaz-core-block-newsletter">
      <div className="">
        <div className="nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ">
          <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
            <h2 className="font-semibold text-4xl">Join our newsletter 🎉</h2>
            <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
              Read and share new perspectives on just about any topic.
              Everyone’s welcome.
            </span>
            <ul className="space-y-5 !mt-10">
              <li className="flex items-center space-x-4">
                <span className="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100  ">
                  01
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Get more discount
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-green-800 bg-green-100  relative">
                  02
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">
                  Get premium magazines
                </span>
              </li>
            </ul>
            <div className="nc-SectionSubscribe2__shortcode-wrap mt-10 relative max-w-sm">
              <div className="emaillist" id="es_form_f1-p1326-n1">
                <span
                  className="es_subscription_message "
                  id="es_subscription_message_6407146e155b9"
                ></span>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <img
              decoding="async"
              src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/SVG-subcribe2.efb832b2-2.png"
              className="w-full"
              sizes="(max-width: 768px) 100vw, 768px"
              alt="newsletter right image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
