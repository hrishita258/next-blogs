import Image from 'next/image'

interface TagsStatProps {
  postCount: number
  authorCount: number
  UsersImages: (string | null)[]
}

const Stat = ({ postCount, UsersImages, authorCount }: TagsStatProps) => {
  return (
    <div className="pb-10 border-b border-b-[rgba(230, 230, 230, 1)]">
      <div className="flex">
        <div className="flex-auto block">
          <div className="block">
            <h2 className="text-2xl font-bold">{postCount}</h2>
          </div>
          <div className="mt-2 block font-normal">Stories</div>
        </div>
        <div className="flex-auto block">
          <div className="block">
            <h2 className="text-2xl font-bold">{authorCount}</h2>
          </div>
          <div className="mt-2 block font-normal">Writers</div>
        </div>
      </div>
      <div className="flex -space-x-2 overflow-hidden mt-4">
        {UsersImages.map(src => (
          <div
            className="w-9 h-9 inline-block rounded-full  ring-2 ring-white relative"
            key={src}
          >
            <Image className="rounded-full" src={src || ''} alt="" fill />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Stat
