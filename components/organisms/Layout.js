import React, { useEffect, useContext } from 'react'
import Seo from '../atoms/Seo'
import NavBar from '../molecules/NavBar'
import { AccessibilityContext } from '@/lib/contexts'

const Layout = ({ seo, children, ...rest }) => {
  const { setIsTabbing } = useContext(AccessibilityContext)

  const isTabbingEvent = event => {
    if (event.key === 'Tab') {
      setIsTabbing(true)
      document.removeEventListener('keydown', isTabbingEvent)
    }
  }
  useEffect(() => {
    if (typeof document === 'object') {
      document.addEventListener('keydown', isTabbingEvent)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    fallbackSEO,
    contactInfo,
    mainMenu: { mainMenuPages = {} } = {},
    footerMenu,
    seoPitch,
  } = rest || {}
  return (
    <>
      <Seo seo={seo} fallbackSEO={fallbackSEO} />
      <NavBar mainMenu={mainMenuPages} />
      <main id="mainContent" tabIndex="-1">
        {children}
        <a href="#">test</a>
      </main>
    </>
  )
}

export default Layout
