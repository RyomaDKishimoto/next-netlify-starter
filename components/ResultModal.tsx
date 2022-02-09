import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type Status =
  | 'canceled'
  | 'processing'
  | 'requires_action'
  | 'requires_capture'
  | 'requires_confirmation'
  | 'requires_payment_method'
  | 'succeeded'

export default function ResultModal({
  resultStatus,
}: {
  resultStatus: Status
}) {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='overflow-y-auto fixed inset-0 z-10'
        initialFocus={cancelButtonRef}
        // onClose={setOpen}
        onClose={() => true}
      >
        <div className='flex justify-center items-center px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 opacity-75 transition-opacity' />
          </Transition.Child>
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block overflow-hidden relative text-left align-bottom bg-white rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle'>
              <div className='px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4'>
                <div className=''>
                  <div className='flex shrink-0 justify-center items-center mx-auto w-12 h-12 bg-green-100 rounded-full'>
                    {resultStatus === 'succeeded' ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 text-green-900'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='w-6 h-6 text-green-900 animate-spin'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                    )}
                  </div>
                  <div className='mt-3 text-center'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      {resultStatus === 'succeeded'
                        ? '支払いが正常に完了しました'
                        : '...'}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-3 px-4 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-10'>
                <a
                  href='/'
                  className='inline-flex justify-center py-3 px-8 w-full text-sm font-semibold tracking-wider text-center text-white active:text-gray-700 bg-teal-500 hover:bg-teal-700 rounded-lg outline-none focus-visible:ring ring-teal-300 transition duration-100 md:text-base'
                >
                  ホームへ戻る
                </a>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
