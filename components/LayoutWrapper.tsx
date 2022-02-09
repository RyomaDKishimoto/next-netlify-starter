import SectionContainer from './SectionContainer'
import Link from './Link'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import headerNavLinks from '../data/headerNavLinks'
import MobileNav from './MobileNav'
import siteMetadata from '../data/siteMetadata'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className='flex flex-col justify-between h-screen'>
        <header className='flex justify-between items-center py-10'>
          <div>
            <Link href='/' aria-label={siteMetadata.headerTitle}>
              <div className='flex justify-between items-center'>
                <div className='mr-3'>
                  <img src='/logo.svg' alt='Icon' />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className='hidden h-6 text-2xl font-semibold sm:block'>
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
