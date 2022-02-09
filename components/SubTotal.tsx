import { useState } from 'react'
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'

export default function SubTotal({ totalAmount, selectedItems }) {
  const [loading, setLoading] = useState(false)

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault()
    if (!selectedItems.some((item) => item.selected)) {
      return alert('選択しろや')
    }
    setLoading(true)
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: totalAmount,
      items: selectedItems,
    })
    if (response.statusCode === 500) {
      return
    }

    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      sessionId: response.id,
    })
    console.warn(error.message)
    setLoading(false)
  }

  return (
    <div className='py-6 px-4 sm:px-6'>
      <div className='grid grid-cols-3 gap-2'>
        <div className='col-span-1'>
          <p className='text-xl tracking-wider text-gray-500 dark:text-gray-300'>
            支援金額
          </p>
        </div>
        <div className='col-span-2 text-right'>
          <p className='mb-2 text-3xl dark:text-white'>¥&nbsp;{totalAmount}</p>
        </div>
      </div>

      <div className='mt-6 '>
        <button
          type='button'
          disabled={loading}
          className='py-3 px-5 w-full text-lg font-medium tracking-wider text-white bg-red-400 hover:bg-red-600 rounded-md border border-transparent focus:ring-red-300'
          onClick={handleSubmit}
        >
          支払い画面へ進む
        </button>
      </div>
    </div>
  )
}
