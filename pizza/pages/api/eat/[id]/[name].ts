import type { NextApiRequest, NextApiResponse } from 'next'
import Room from '../../../../database/models/Room'
import Slice from '../../../../database/models/Slice';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.id as string;
  const name = req.query.name as string;
  const room = await Room.findOne({ where: { code }});
  if (!room) {
    res.status(400).json({ ok: false, message: "Room not found" });
    return;
  }

  const slices = await Slice.findAll({ where: { room_code: code }});

  if (slices.length >= 8) {
    res.status(400).json({ ok: false, message: "Pizza is eaten" });
    return;
  }
  let taken = false;
  slices.forEach(slice => {
    if (slice.name === name) {
      res.status(400).json({ ok: false, message: "Name is taken" });
      taken = true;
      return;
    }
  });
  if (taken) return;

  await Slice.create({
    room_code: code,
    name
  });
  
  res.status(200).json({ ok: true });
}
