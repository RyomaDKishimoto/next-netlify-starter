export default function PaymentForm({ selectedItems, onSelect }) {
  return (
    <>
      <div className='flex-1 py-6 px-4 sm:px-6'>
        <div className='flex justify-between items-start'>
          <h2 className='text-xl font-medium tracking-wider text-gray-500 dark:text-gray-300'>
            選択中のリターン
          </h2>
        </div>

        <div className='mt-8'>
          <div className='flow-root'>
            <ul
              role='list'
              className='-my-6 border-b-2 border-gray-300 divide-y-2 divide-gray-300'
            >
              {selectedItems.map((product) => (
                <li
                  key={product.apiId}
                  className={`${product.selected ? 'flex' : 'hidden'} py-6`}
                >
                  <div className='overflow-hidden shrink-0 w-24 h-24 rounded-md border border-gray-200'>
                    <img
                      src={product.imgSrc}
                      alt='リターンイメージ'
                      className='object-cover object-center w-full h-full'
                    />
                  </div>
                  <div className='flex flex-col flex-1 ml-4'>
                    <div>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <h3>
                          <a className='dark:text-white' href={product.href}>
                            {product.title}
                          </a>
                        </h3>
                        <p className='ml-4 dark:text-white'>
                          {product.price}円
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-1 justify-between items-end text-sm'>
                      <div className='mb-1'>
                        <div className='relative'>
                          <select
                            onChange={(e) => {
                              onSelect((prev) =>
                                prev.map((item) => {
                                  return item.apiId === product.apiId
                                    ? {
                                        ...item,
                                        quantity: Number(e.target.value),
                                      }
                                    : item
                                }),
                              )
                            }}
                            className='py-2 pr-10 pl-3 text-base rounded border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 appearance-none'
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <span className='flex absolute top-0 right-0 justify-center items-center w-10 h-full text-center text-gray-600 dark:text-white pointer-events-none'>
                            <svg
                              fill='none'
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              className='w-4 h-4'
                              viewBox='0 0 24 24'
                            >
                              <path d='M6 9l6 6 6-6'></path>
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className='flex mb-2'>
                        <button
                          type='button'
                          onClick={() => {
                            onSelect((prev) =>
                              prev.map((item) => {
                                return item.apiId === product.apiId
                                  ? { ...item, selected: !item.selected }
                                  : item
                              }),
                            )
                          }}
                          className='font-medium text-indigo-600 hover:text-indigo-500'
                        >
                          <svg
                            className='w-8 h-8 text-teal-500'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            {' '}
                            <polyline points='3 6 5 6 21 6' />{' '}
                            <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />{' '}
                            <line x1='10' y1='11' x2='10' y2='17' />{' '}
                            <line x1='14' y1='11' x2='14' y2='17' />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
