const TwoColoumnLayout = () => {
  return (
    <div className="relative">
      <div className="wp-block-group container">
        <div className="wp-block-group__inner-container">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12"></div>
            <div className="lg:col-span-4 border-l p-9 pt-0 hidden lg:block">
              <aside className="sticky top-[80px] self-start w-full"></aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TwoColoumnLayout
