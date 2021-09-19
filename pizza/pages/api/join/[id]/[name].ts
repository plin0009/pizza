import type { NextApiRequest, NextApiResponse } from 'next'
import Room from '../../../../database/models/Room'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = req.query.name as string;
  const room = await Room.findOne({ where: { code: req.query.id }});
  if (!room) {
    res.status(400).json({ ok: false, message: "Room not found" });
    return;
  }
  
  res.status(200).json({ ok: true });
}
