const ProgressBar = () => {
  return (
    <div className='relative pt-1'>
      <div className='flex justify-between items-center mb-2'>
        <div>
          <span className='inline-block py-1 px-2 text-xs font-semibold tracking-wider text-orange-600 uppercase bg-orange-200 rounded-full'>
            目標金額は2,000,000円
          </span>
        </div>
        <div className='text-right'>
          <span className='inline-block text-xs font-semibold text-orange-600'>
            50%
          </span>
        </div>
      </div>
      <div className='flex overflow-hidden mb-4 h-4 text-xs bg-orange-200 rounded-full'>
        <div
          style={{ width: '10%' }}
          className='flex flex-col justify-center text-center text-white whitespace-nowrap bg-red-500 shadow-none'
        ></div>
        <div
          style={{ width: '15%' }}
          className='flex flex-col justify-center text-center text-white whitespace-nowrap bg-orange-500 shadow-none'
        ></div>
        <div
          style={{ width: '25%' }}
          className='flex flex-col justify-center text-center text-white whitespace-nowrap bg-orange-500 shadow-none'
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
