'use client'

import { Post } from '@prisma/client'
import { useCallback, useEffect, useRef, useState } from 'react'
import ListCard from '../../Cards/ListCard'

interface ListCardWrapperProps {
  initialPosts: PostWithTagsAndAuthor[]
  slug: string
}

interface PostWithTagsAndAuthor extends Post {
  PostTag: {
    Tag: {
      id: string
      normalizedTagSlug: string
      displayTitle: string
    }
  }[]
  PostTopics: {
    Topics: {
      id: string
      name: string
      slug: string
    }
  }[]
  author: {
    id: string
    image: string | null
    name: string
  }
}

const ListCardWrapper = ({ initialPosts, slug }: ListCardWrapperProps) => {
  const [posts, setPosts] = useState<PostWithTagsAndAuthor[]>(initialPosts)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const observer = useRef<IntersectionObserver>()

  const fetchMorePosts = useCallback(async () => {
    const res = await fetch(`/api/posts?slug=${slug}&page=${currentPage + 1}`)

    if (!res.ok) throw new Error('Failed to fetch data')
    const newPosts = await res.json()
    console.log(newPosts)
    if (newPosts.length === 0) {
      setHasMore(false)
    } else {
      setPosts([...posts, ...newPosts])
      setCurrentPage(currentPage + 1)
      console.log({ currentPage })
    }
  }, [currentPage, posts, slug])

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting && hasMore) {
          fetchMorePosts()
        }
      },
      { rootMargin: '0px 0px 100% 0px' } // trigger when the element is 100% visible in the viewport
    )

    if (observer.current) {
      observer.current.observe(document.querySelector('#bottom') as HTMLElement)
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [fetchMorePosts, hasMore])

  return (
    <div>
      {posts?.map(post => (
        <ListCard key={post.id} post={post} slug={slug} />
      ))}
      <div id="bottom" key={'some'} />
    </div>
  )
}

export default ListCardWrapper
