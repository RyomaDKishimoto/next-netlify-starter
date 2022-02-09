import ProgressBar from './ProgressBar'
import FacebookIcon from '../components/social-icons/Facebook'
import InstagramIcon from '../components/social-icons/Instagram'
import Line from '../components/social-icons/Line'
import TwitterIcon from '../components/social-icons/Twitter'
import Cards from '../components/Cards'
import Profile from './Profile'

const TopSection = () => {
  return (
    <>
      <h1 className='mt-4 mb-6 text-3xl font-medium tracking-wider text-center text-gray-600 dark:text-white capitalize lg:text-4xl'>
        【ベガルタ仙台】カントリーロードリニューアルプロジェクト
      </h1>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4'>
          <div className='overflow-hidden rounded'>
            <img
              className='w-full'
              src='/static/images/google.png'
              alt='Sunset in the mountains'
            />
            <div className='py-4 px-6'>
              <div className='mb-2 text-xl font-normal tracking-wider text-gray-600 dark:text-white'>
                カントリーロードは、クラブの記録を長く残していくことを目的として、チーム名がベガルタ仙台に変わった1999年から発行を重ねてまいりました。しかし、ここ数年の販売部数減少により、採算が厳しい現状を受け、クラウドファンディングによるプロジェクトを起案いたしました。ぜひご協力をお願いいたします。
              </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
              <div className='col-span-2 bg-white dark:bg-gray-800 lg:col-span-1 xl:col-span-1'>
                <FacebookIcon />
              </div>
              <div className='col-span-2 bg-white dark:bg-gray-800 lg:col-span-1 xl:col-span-1'>
                <TwitterIcon />
              </div>
              <div className='col-span-2 bg-white dark:bg-gray-800 lg:col-span-1 xl:col-span-1'>
                <InstagramIcon />
              </div>
              <div className='col-span-2 bg-white dark:bg-gray-800 lg:col-span-1 xl:col-span-1'>
                <Line />
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2'>
          <div className='p-6 w-full sm:p-4'>
            <div className='first-line:font-normal tracking-wider leading-relaxed text-gray-600 dark:text-white'>
              現在の支援総額
            </div>
            <h5 className='mb-4 text-5xl font-medium text-gray-900 dark:text-white'>
              2,339,000円
            </h5>
            <ProgressBar />
          </div>
          <Profile />
        </div>
      </div>
    </>
  )
}

export default TopSection
