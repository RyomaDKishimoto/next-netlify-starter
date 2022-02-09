import { NextPage } from 'next'
import Error from 'next/error'

const PageNotFound: NextPage = () => {
  return (
    <div className='py-6 sm:py-0'>
      <div className='px-4 mx-auto max-w-screen-xl md:px-8'>
        <div className='grid gap-8 sm:grid-cols-2 sm:gap-12'>
          <div className='overflow-hidden h-80 bg-gray-100 rounded-lg shadow-lg sm:rounded-none sm:shadow-none md:h-auto'>
            <img
              src='https://images.unsplash.com/photo-1452022449339-59005948ec5b?auto=format&q=75&fit=crop&w=600'
              loading='lazy'
              alt='Photo by Jeremy Cai'
              className='object-cover object-center w-full h-full'
            />
          </div>

          <div className='flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32 xl:py-64'>
            <p className='mb-4 text-sm font-semibold text-teal-500 uppercase md:text-base'>
              Error 404
            </p>
            <h1 className='mb-2 text-2xl font-bold text-center text-gray-800 dark:text-white sm:text-left md:text-3xl'>
              ページが見つかりませんでした
            </h1>

            <p className='mb-8 text-center text-gray-500 sm:text-left md:text-lg'>
              The page you’re looking for doesn’t exist.
            </p>

            <a
              href='/'
              className='inline-block py-3 px-8 text-sm font-semibold tracking-wider text-center text-white active:text-gray-700 bg-teal-500 hover:bg-teal-700 rounded-lg outline-none focus-visible:ring ring-teal-300 transition duration-100 md:text-base'
            >
              ホームへ戻る
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageNotFound
