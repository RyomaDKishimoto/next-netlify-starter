import * as React from 'react'
import { useState } from 'react'
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
// import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import * as config from '../config'
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  })

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      // amount: input.customDonation,
      amount: 10,
    })
    if (response.statusCode === 500) {
      return
    }
    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
    setLoading(false)
  }

  const price = 100
  // const [succeeded, setSucceeded] = React.useState(false)
  // const [error, setError] = React.useState(null)
  // const [processing, setProcessing] = React.useState(false)
  // const [disabled, setDisabled] = React.useState(true)
  // const [clientSecret, setClientSecret] = React.useState('');
  // react hookを利用したstripeへのアクセス
  // const stripe = useStripe();
  // const elements = useElements();

  // useEffect(() => {
  //   // ページロード時にPaymentIntentを作成
  //   window
  //     .fetch('/api/checkout', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ price }),
  //     })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setClientSecret(data.clientSecret);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  // 入力時のチェック
  // const handleChange = async (event: StripeCardElementChangeEvent) => {
  //   setDisabled(event.empty)
  //   setError(event.error ? event.error.message : '')
  // }

  // const handleSubmit = async (ev: React.FormEvent) => {
  //   ev.preventDefault();
  //   setProcessing(true);
  //   const payload = await stripe.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card: elements.getElement(CardElement),
  //     },
  //   });
  //   if (payload.error) {
  //     setError(`Payment failed ${payload.error.message}`);
  //     setProcessing(false);
  //   } else {
  //     setError(null);
  //     setProcessing(false);
  //     setSucceeded(true);
  //   }
  // };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <div className='my-2'>&yen;{price} の支払い</div>

      <button type='submit' disabled={loading}>
        Donate {price}
      </button>
    </form>
  )
}

export default CheckoutForm
