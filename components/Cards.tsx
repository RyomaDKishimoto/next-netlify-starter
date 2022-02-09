const Cards = ({
  title,
  description,
  imgSrc,
  price,
  apiId,
  selected,
  onSelect,
}) => {
  return (
    <button
      type='button'
      onClick={() => {
        onSelect((prev) =>
          prev.map((item) => {
            return item.apiId === apiId
              ? { ...item, selected: !item.selected }
              : item
          }),
        )
      }}
      className={`flex overflow-hidden relative flex-col items-center mx-auto mb-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg border-4 ${
        selected ? 'border-teal-500' : 'hover:border-teal-500'
      } md:flex-row`}
    >
      {selected ? (
        <span className='absolute top-0 right-0 py-1 px-3 text-xl tracking-widest text-white bg-teal-500 rounded-bl'>
          このリターンを選択中
        </span>
      ) : null}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`absolute top-3 left-3 w-8 h-8 ${
          selected ? 'text-teal-600' : 'text-gray-600'
        } sm:w-9 sm:h-9`}
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </svg>
      <img
        className='object-cover w-full h-96 md:w-48 md:h-auto md:rounded-none md:rounded-l-lg'
        src={imgSrc}
        alt=''
      />
      <div className='flex flex-col justify-between p-5 leading-normal text-left'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </button>
  )
}

export default Cards
