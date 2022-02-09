export default function About() {
  return (
    <div className='mx-auto'>
      <div className='overflow-hidden h-64 rounded-lg'>
        <img
          alt='content'
          className='object-cover object-center w-full h-full'
          src='https://dummyimage.com/1200x500'
        />
      </div>
      <div className='flex flex-col mt-10 sm:flex-row'>
        <div className='text-center sm:py-8 sm:pr-8 sm:w-1/3'>
          <div className='inline-flex justify-center items-center w-20 h-20 text-gray-600 bg-gray-800 rounded-full'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10'
              viewBox='0 0 24 24'
            >
              <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
              <circle cx='12' cy='7' r='4'></circle>
            </svg>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <h2 className='mt-4 text-lg font-medium tracking-wide text-gray-900 dark:text-white'>
              Phoebe Caulfield
            </h2>
            <div className='mt-2 mb-4 w-12 h-1 bg-green-500 rounded'></div>
            <p className='text-base tracking-wide text-gray-400'>
              Raclette knausgaard hella meggs normcore williamsburg enamel pin
              sartorial venmo tbh hot chicken gentrify portland.
            </p>
          </div>
        </div>
        <div className='pt-4 mt-4 text-center border-t border-gray-300 sm:py-8 sm:pl-8 sm:mt-0 sm:w-2/3 sm:text-left sm:border-t-0 sm:border-l'>
          <p className='mb-4 text-lg leading-relaxed'>
            Meggings portland fingerstache lyft, post-ironic fixie man bun banh
            mi umami everyday carry hexagon locavore direct trade art party.
            Locavore small batch listicle gastropub farm-to-table lumbersexual
            salvia messenger bag. Coloring book flannel truffaut craft beer
            drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90s scenester vexillologist forage post-ironic
            asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
            before they sold out four loko. 3 wolf moon brooklyn.
          </p>
          <a className='inline-flex items-center text-green-400'>
            Learn More
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='ml-2 w-4 h-4'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
