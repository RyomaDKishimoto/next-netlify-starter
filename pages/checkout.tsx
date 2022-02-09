import { NextPage } from 'next'
import React from 'react'

import { Elements as StripeElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckoutForm from '../components/CheckoutForm'

// loadScriptでstripeのスクリプトを呼び出す
const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY)

/**
 * Checkout
 */
const Checkout: NextPage = () => (
  <section>
    <div className='mx-auto mt-10 w-96'>
      {/* striptのプロパティにloadStripを渡す。こうすることで子のコンポーネントでstripeのサービスが利用できるのようになる */}
      <StripeElements stripe={promise}>
        <CheckoutForm />
      </StripeElements>
    </div>
  </section>
)

export default Checkout
