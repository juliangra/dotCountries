import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

interface LayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
