import React from 'react'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill,BsPersonCircle}
 from 'react-icons/bs'

 import { FaMoneyBill } from 'react-icons/fa';
 import { BiTrendingUp } from 'react-icons/bi';
 import { FaQuestionCircle } from 'react-icons/fa';
 import { RiDashboardLine } from 'react-icons/ri';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <RiDashboardLine  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaMoneyBill className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BiTrendingUp className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaQuestionCircle className='icon'/> Help
                </a>
            </li>
        </ul>
        
    </aside>
  )
}

export default Sidebar