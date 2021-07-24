import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Header.scss'


const Header = ({ link }) => {
    
    const navlink = useRef(null)

    useEffect( () => {
        
        let tl2 = gsap.timeline({delay: 2})
        tl2.fromTo(navlink.current, {translateY: '-210%'}, {translateY: '0%'})

    })

    return (
        <header>
            <nav>
                    <a ref={navlink} href={`#${link}`}>Book Appointment</a>
            </nav>
        </header>
    )
}

export default Header
