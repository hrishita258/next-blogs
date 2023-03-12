import Image from 'next/image'

interface TopAuthorsProps {
  topAuthors: {
    id: string
    image: string | null
    name: string
    bio: string | null
    _count: {
      posts: number
    }
    email: string
  }[]
}

const TopAuthors = ({ topAuthors }: TopAuthorsProps) => {
  return (
    <div className="mt-10">
      <div className="pb-4 block">
        <h2 className="text-[18px] text-gray-900 font-medium">Top Writers</h2>
      </div>
      <div className="block">
        {topAuthors.map(author => (
          <div
            key={author.id}
            className="flex justify-between pt-4 items-center w-full"
          >
            <div className="flex mr-2">
              <div className="relative block w-full max-w-[40px]">
                <Image
                  src={author.image || ''}
                  className="h-10 w-10 rounded-full shadow-md"
                  alt="somehtiing"
                  width={40}
                  height={40}
                />
              </div>

              <div className="mr-2 ml-4 block">
                <div className="flex items-center text-sm font-medium">
                  <a href="/s">{author.name}</a>
                </div>
                <a href="/s" className="line-clamp-2 text-xs">
                  {author.bio}
                </a>
              </div>
            </div>
            <button
              className=" relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm   px-5 py-1  disabled:bg-opacity-70 bg-pink-600 hover:bg-pink-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 dark:focus:ring-offset-0"
              title=""
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TopAuthors
