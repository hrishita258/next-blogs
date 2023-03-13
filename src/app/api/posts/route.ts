import { NextResponse } from 'next/server'
import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const page = parseInt(searchParams.get('page') || '1')
  const offset = (page - 1) * 10
  if (!slug) return new Response('Slug is required', { status: 400 })
  if (!page) return new Response('Page is required', { status: 400 })

  const posts = await prisma.post.findMany({
    where: {
      OR: [
        {
          PostTag: {
            some: {
              tag: {
                normalizedTagSlug: slug
              }
            }
          }
        },
        {
          PostTag: {
            some: {
              post: {
                PostTag: {
                  some: {
                    tag: {
                      PostTag: {
                        some: {
                          tag: {
                            normalizedTagSlug: slug
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          image: true
        }
      },
      PostTag: {
        select: {
          tag: {
            select: {
              displayTitle: true,
              normalizedTagSlug: true,
              id: true
            }
          }
        }
      }
    },
    orderBy: {
      published: 'desc'
    },
    skip: offset,
    take: 10
  })
  return NextResponse.json(posts)
}
