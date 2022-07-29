import React from 'react'
import Image from './logo512.png'

function Navbar(){
    return (
        <nav className='navbar'>
            <div className='Logodiv'>
                <img src={Image} alt="Logo" className='MyImage'/>
                <h1 className='LogoText'>ReactFacts</h1>
            </div>
            <h1 className='Textreact'>React Course-Project1</h1>
        </nav>
    )
}

export default Navbar