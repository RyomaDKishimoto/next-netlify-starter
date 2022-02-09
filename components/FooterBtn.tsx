export default function FooterBtn() {
  return (
    <a
      href='/projects'
      className='flex justify-center items-center py-2.5 px-5 w-full text-lg font-medium tracking-wider text-center text-white bg-red-400 hover:bg-red-600 rounded-lg focus:ring-4 focus:ring-red-300'
    >
      支援する
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
  )
}
