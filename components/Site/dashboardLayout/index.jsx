import React from 'react'
import SidebarAdmin from './sidebar'
import FooterAdmin from './footer'
import Header from "../../components/header/Header";
export default function AdminMainLayout({children}) {
  return (
    <div className='dashboard-wrapper'>

<Header/>
<SidebarAdmin/>

<div className="main-content">
{children}

</div>

<FooterAdmin/>


    </div>
  )
}
