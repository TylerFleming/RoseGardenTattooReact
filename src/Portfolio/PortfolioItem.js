import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Portfolio.scss'


const PortfolioItem = ({ id, url, alt }) => {


    useEffect( () => {
        let portfolioTL = gsap.timeline({ delay: 0.5,
            scrollTrigger: {
                trigger: "#portfolio-section",
                start: "top 75%",
                toggleActions: 'play none none none'
            }
        })
        .fromTo('.portfolio__item__reveal__element', {translateY:'0%'}, {translateY: '100%', stagger: {each: 0.15}})
        .to('.portfolio__item__reveal__element', {opacity: 0})
        .fromTo('.portfolio__header', {opacity: 0}, {opacity: 1}, '-=1.5')
    })


    return <>
    <div className={`portfolio__item item-${id} ${id % 2 === 0 ? 'short' : 'wide'}`}>
        <div className="portfolio__item__reveal__element"></div>
        <img src={url} alt={alt} />
    </div>
    </>
}

export default PortfolioItem
