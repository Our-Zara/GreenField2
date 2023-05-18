import React from 'react'
import NavBar from './navBar'
// import "../../styles/Layout.module.css"


const Layout = ({children}:any) => {
  return (
    <div >
      <NavBar/>
      <div>{children}</div>

    </div>
  )
}

export default Layout