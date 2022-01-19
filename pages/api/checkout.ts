import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY!, {
  apiVersion: '2020-08-27',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { price } = req.body;
  // 注文アイテムの個数と、通貨を指定し、PaymentIntent を作成
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: 'jpy',
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
