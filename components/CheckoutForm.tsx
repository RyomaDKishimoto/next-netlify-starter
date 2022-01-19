import * as React from 'react';
import { useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';

const cardOptions = {
  hidePostalCode: true,
  style: {
    base: {
      color: '#1a1a1a',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      lineHeight: '1.4',
      fontSize: '16px',
      '::placeholder': {
        color: '#999',
      },
    },
  },
};

/**
 * CheckoutForm
 */
const CheckoutForm = () => {
  const price = 100;
  const [succeeded, setSucceeded] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [processing, setProcessing] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [clientSecret, setClientSecret] = React.useState('');
  // react hookを利用したstripeへのアクセス
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // ページロード時にPaymentIntentを作成
    window
      .fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => console.error(error));
  }, []);

  // 入力時のチェック
  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <div className='my-2'>&yen;{price} の支払い</div>
      {/* 成功時の表示　*/}
      {succeeded ? (
        <p>
          <span>支払いが完了しました。</span>
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </a>
          <span>で確認しましょう。</span>
        </p>
      ) : (
        <div>
          {/* CartElementはiframeを利用したクレジットカード入力フォームを提供する */}
          <div className='border border-gray-300 p-4 rounded'>
            <CardElement onChange={handleChange} options={cardOptions} />
          </div>
          <button
            className='rounded bg-blue-500 text-white px-4 py-2 mt-2'
            disabled={processing || disabled || succeeded}
            id='submit'
          >
            <span>{processing ? 'sending...' : 'Pay now'}</span>
          </button>
          {/* エラーの表示 */}
          {error && <div role='alert'>{error}</div>}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
