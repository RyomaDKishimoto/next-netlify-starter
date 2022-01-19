import { NextPage } from 'next';
import React from 'react';

import { Elements as StripeElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from '../components/CheckoutForm';

interface CheckoutProps {}

// loadScriptでstripeのスクリプトを呼び出す
const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

/**
 * Checkout
 */
const Checkout: NextPage<CheckoutProps> = () => (
  <section>
    <div className='mt-10 mx-auto w-96'>
      {/* striptのプロパティにloadStripを渡す。こうすることで子のコンポーネントでstripeのサービスが利用できるのようになる */}
      <StripeElements stripe={promise}>
        <CheckoutForm />
      </StripeElements>
    </div>
  </section>
);

export default Checkout;
