import FooterBtn from '../components/FooterBtn'

export default function Profile() {
  return (
    <div className='p-10 font-semibold text-center bg-white dark:bg-gray-800 rounded-lg dark:border-gray-700'>
      <img
        className='mx-auto mb-3 w-32 h-32 rounded-full'
        src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        alt='product designer'
      />
      <h1 className='text-xl tracking-wider text-gray-700 dark:text-white'>
        {' '}
        John Doe{' '}
      </h1>
      <p className='mt-4 mb-8 text-lg font-normal tracking-wider text-gray-400'>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{' '}
      </p>
      <FooterBtn />
    </div>
  )
}
