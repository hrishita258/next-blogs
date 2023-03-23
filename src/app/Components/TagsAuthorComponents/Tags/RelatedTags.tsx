import { Topics } from '@prisma/client'
import Link from 'next/link'

interface RelatedTagsProps {
  relatedTags: Topics[]
}

const RelatedTags = ({ relatedTags }: RelatedTagsProps) => {
  return (
    <div className="mt-10">
      <div className="pb-4 block">
        <h2 className="text-[18px] text-gray-900 font-medium">
          Related Topics
        </h2>
      </div>
      <div className="flex gap-3 flex-wrap">
        {relatedTags.map(topic => (
          <Link key={topic.id} href={'/tag/' + topic.slug}>
            <div
              key={topic.id}
              className="py-1.5 px-5 text-sm  text-gray-800 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-pink-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:cursor-pointer hover:border-pink-600"
            >
              {topic?.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default RelatedTags
