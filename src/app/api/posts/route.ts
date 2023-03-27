import { NextResponse } from 'next/server'
import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const page = parseInt(searchParams.get('page') || '1')
  const offset = (page - 1) * 10
  if (!slug) return new Response('Slug is required', { status: 400 })
  if (!page) return new Response('Page is required', { status: 400 })

  const transaction = await prisma.$transaction([
    // Get posts based on the topic slug and related topics
    prisma.post.findMany({
      where: {
        Topics: { slug }
      },
      select: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
            username: true
          }
        },
        Topics: {
          select: {
            name: true,
            slug: true
          }
        },
        slug: true,
        title: true,
        excerpt: true,
        PostTopics: {
          select: {
            Topics: {
              select: {
                id: true,
                name: true,
                slug: true
              }
            }
          }
        },
        PostTag: {
          select: {
            Tag: {
              select: {
                displayTitle: true,
                normalizedTagSlug: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 12
    })
  ])

  return NextResponse.json(transaction[0])
}
