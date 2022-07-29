import React from "react"
import Image from './logo512.png'

function Header(){
    return (
        <header>
          <nav>
            <img alt='cam' className='ImageLogo' src={Image}  />
            <ul className='nav-items'>
              <li>Menu</li>
              <li>About</li>
              <li>Home</li>
            </ul>
          </nav>
      </header>
    )
}
export default Header