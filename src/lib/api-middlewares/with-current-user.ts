import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/lib/auth'

export function withCurrentUser(handler: NextApiHandler) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      const query = req.query as { userId: string }
      // Check if the user has access to this user.
      const session = await getServerSession(req, res, authOptions)

      if (query.userId !== (session?.user as any)?.id) {
        return res.status(403).end()
      }

      return handler(req, res)
    } catch (error) {
      if (error) {
        return res.status(422).json(error)
      }

      return res.status(500).end()
    }
  }
}
