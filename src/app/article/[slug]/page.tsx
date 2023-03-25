import BlogRenderer from '@/app/Components/Blocks/BlogRenderer'
import { formatDate } from '@/Utils/formatDate'
import Image from 'next/image'
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
          email: true
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
              <div className="flex items-end border-b py-3 w-full md:w-4/5">
                <div className="mr-8 flex flex-auto items-center">
                  <a href="asd" className="relative h-12 w-12 rounded-full">
                    <Image
                      src={data?.author?.image || ''}
                      alt={data?.author?.name || 'user image'}
                      loading="lazy"
                      fill
                      className="rounded-full"
                    />
                  </a>
                  <div className="ml-4">
                    <span className="font-normal text-gray-700">
                      {data?.author.name}
                    </span>
                    <p className="text-sm font-light text-gray-500">
                      {formatDate(data?.createdAt.toString() || '')}
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
              <BlogRenderer key={'hh'} data={data?.content} />
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
