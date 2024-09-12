import React from 'react'
import SidebarAdmin from './sidebar'
import FooterAdmin from './footer'
export default function AdminMainLayout({children}) {
  return (
    <div className='dashboard-wrapper'>

<SidebarAdmin/>

<div className="main-content">
{children}

</div>

<FooterAdmin/>


    </div>
  )
}
