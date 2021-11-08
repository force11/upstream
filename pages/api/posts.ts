import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { getIndexedPosts } from '../../lib/posts'
import { initMiddleware } from '../../lib/helpers'

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run cors
  await cors(req, res)

  const query = req.query.query as string
  const page = req.query.page as unknown
  const perPage = req.query.perPage as unknown
  const posts = await getIndexedPosts(query, page as number, perPage as number)
  const response = posts
  res.status(200).json(response)
}
