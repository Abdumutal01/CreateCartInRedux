import React, { Fragment } from 'react'
import MainHeader from "./MainHeader"
function Layout(props) {
  return (
    <div>
      <Fragment >
          <MainHeader />
          <main>{props.children}</main>
      </Fragment>
    </div>
  )
}

export default Layout