import type { NextApiRequest, NextApiResponse } from 'next'
import Room from '../../database/models/Room'

type Data = {
  code: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const code = 'pepperoni';
  await Room.create({code});
  res.status(200).json({ code });
}
