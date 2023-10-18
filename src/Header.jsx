import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { FaHandPeace } from 'react-icons/fa';

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left' style={{ color: 'black'}}>
        <h3>Hello Shahrukh <FaHandPeace size={20} />,</h3>
            {/* <BsSearch  className='icon'/> */}
        </div>
        <div className='header-right'>
        <BsSearch  className='icon'/>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header