/* This example requires Tailwind CSS v2.0+ */
import siteMetadata from '../data/siteMetadata'
import SocialIcon from './social-icons'

export default function Cta() {
  return (
    <div className='container flex flex-col items-center py-24 px-5 mx-auto md:flex-row'>
      <div className='flex flex-col pr-0 mb-6 w-full text-center md:pr-10 md:mb-0 md:w-auto md:text-left'>
        <h2 className='mb-1 text-xs font-medium tracking-wider text-teal-500'>
          ROOF PARTY POLAROID
        </h2>
        <h1 className='text-2xl font-medium tracking-wider text-gray-600 dark:text-white md:text-3xl'>
          質問やご不明点などあればSNSでも受け付けてます！
        </h1>
      </div>
      <div className='flex shrink-0 items-center mx-auto space-x-4 md:mr-0 md:ml-auto'>
        <img
          className='inline-flex object-cover w-16 h-16 rounded-full md:mr-2'
          src='https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
          alt='Profile image'
        />
        <SocialIcon
          kind='mail'
          href={`mailto:${siteMetadata.email}`}
          size={6}
        />
        <SocialIcon kind='facebook' href={siteMetadata.facebook} size={6} />
        <SocialIcon kind='youtube' href={siteMetadata.youtube} size={6} />
        <SocialIcon kind='twitter' href={siteMetadata.twitter} size={6} />
        <a
          href='https://twitter.com/share?ref_src=twsrc%5Etfw'
          className='twitter-share-button'
          data-text='hoge ------- !!'
          data-url='https://tailwind-nextjs-starter-blog.vercel.app/about'
          data-via='ryoma_okinawa'
          data-show-count='false'
        >
          Tweet
        </a>
        {/* <script
          async
          src='https://platform.twitter.com/widgets.js'
          charSet='utf-8'
        ></script> */}
      </div>
    </div>
  )
}
