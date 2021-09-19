import type { NextApiRequest, NextApiResponse } from 'next'
import Room from '../../database/models/Room'
import toppings from '../../toppings';

type Data = {
  code: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let code = 'pepperoni';
  let i = 0;
  while (await Room.findOne({ where: { code }})) {
    i++;
    code = toppings[i];
    if (i === toppings.length) {
      i = 0;
      code = `pepperoni ${code}`;
    }
  }
  await Room.create({code});
  res.status(200).json({ code });
}
