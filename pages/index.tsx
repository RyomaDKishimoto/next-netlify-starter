import Head from 'next/head'
import Cta from '../components/Cta'
import Middle from '../components/Middle'
import Top from '../components/Top'
import FooterBtn from '../components/FooterBtn'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <Top />
        <Middle />
        <Cta />
        <div className='sticky bottom-2 visible md:invisible'>
          <FooterBtn />
        </div>
      </main>
    </div>
  )
}
