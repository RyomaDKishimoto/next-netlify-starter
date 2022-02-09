import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

import { CURRENCY, MIN_AMOUNT, MAX_AMOUNT } from '../../../config'
import { formatAmountForStripe } from '../../../utils/stripe-helpers'

const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { amount, items } = req.body
    const selectedItems = items
      .filter((item) => item.selected)
      .map((item) => {
        return {
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
          price: item.apiId,
          quantity: item.quantity,
        }
      })
    try {
      // Validate the amount that was passed from the client.
      if (
        !(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT) ||
        selectedItems.length === 0
      ) {
        throw new Error('Invalid amount.')
      }
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: 'donate',
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: selectedItems,
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/`,
      }
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params).then()

      res.status(200).json(checkoutSession)
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
