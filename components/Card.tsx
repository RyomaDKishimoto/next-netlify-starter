import Image from './Image'
import Link from './Link'
import { useRouter } from 'next/router'

export default function Card({
  title,
  description,
  imgSrc,
  href,
  price,
  apiId,
}) {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/projects',
      query: { item: apiId },
    })
  }
  return (
    <div className='overflow-hidden relative mb-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'>
      <span className='absolute top-0 right-0 py-2 px-3 text-2xl tracking-wider text-white bg-teal-500 rounded-bl'>
        {price}円
      </span>
      <img className='rounded-t-lg' src={imgSrc} alt='return item' />
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-wider text-gray-600 dark:text-white'>
            {title}
          </h5>
        </a>
        <button
          type='button'
          onClick={handleClick}
          className='py-2.5 px-5 my-3 w-full text-lg tracking-wider text-center text-white bg-red-400 hover:bg-red-600 rounded-lg focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800'
        >
          このリターンを選択する
        </button>
        <p className='my-3 font-normal tracking-wider text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <a
          href='/projects'
          className='inline-flex items-center py-2 px-3 text-sm font-medium tracking-wider text-center text-teal-500'
        >
          全てのリターンを見る
          <svg
            className='-mr-1 ml-2 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
