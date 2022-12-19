import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { HashLink } from 'react-router-hash-link'

/* we use hashlink over link as,In link if invalid # is visited then page shows blank...after that if we vist any other valid # then page reloads*/
export const Header = () => {
  return (
    <nav>
        <i><h1>Grow-More</h1></i>
        <main>
            <HashLink to={'/'}>Home</HashLink>
            <HashLink to={'/#brands'}>Brands</HashLink>
            <HashLink to={'/#about'}>About</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <Link to={'/services'}>Services</Link>
        </main>
    </nav>
  )
}
