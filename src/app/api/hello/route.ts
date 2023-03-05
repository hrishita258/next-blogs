import { User } from '@prisma/client'
import prisma from '../../../../prisma/client'

export async function GET(request: Request) {
  const data: User[] = await prisma.user.findMany()
  return new Response(JSON.stringify(data))
}
