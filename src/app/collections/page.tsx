import { formatDate } from '@/Utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '../../../prisma/client'

async function getCollections() {
  const collections = await prisma.collection.findMany({
    include: {
      _count: {
        select: {
          posts: true
        }
      },
      author: {
        select: {
          name: true,
          image: true,
          id: true
        }
      }
    }
  })
  return { collections }
}

export default async function Page() {
  const { collections } = await getCollections()
  return (
    <div className="container">
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {collections.map(item => (
          <Link key={item.id} href={'collections/' + item.slug}>
            <div key={item.id} className="cursor-pointer group">
              <div className=" overflow-hidden transition-all  rounded-md dark:bg-gray-800   hover:scale-105">
                <span className="inline-block text-sm  tracking-wider mb-1 text-pink-600">
                  {item._count.posts}
                  {item._count.posts > 1 ? ' Posts' : ' Post'}
                </span>
                <div className="relative block aspect-square">
                  <Image
                    alt="Thumbnail"
                    sizes="(max-width: 768px) 30vw, 33vw"
                    decoding="async"
                    fill
                    className="transition-all object-cover"
                    loading="lazy"
                    src={item.image || ''}
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <h2 className="text-xl font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                    <p>
                      <span className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                        {item.name}
                      </span>
                    </p>
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-3">
                      <div className="relative flex-shrink-0 w-5 h-5">
                        <Image
                          alt="Mario Sanchez"
                          sizes="20px"
                          decoding="async"
                          fill
                          className="rounded-full object-cover"
                          loading="lazy"
                          src={item.author.image || ''}
                        />
                      </div>
                      <span className="text-sm">{item.author.name}</span>
                    </div>
                    <span className="text-xs text-gray-300 dark:text-gray-600">
                      •
                    </span>
                    <time
                      className="text-sm"
                      dateTime={item.createdAt.toString()}
                    >
                      {formatDate(item.createdAt.toString())}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
