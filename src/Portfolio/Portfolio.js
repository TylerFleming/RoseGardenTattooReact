import { useEffect, useRef } from "react"
import PortfolioItem from "./PortfolioItem"
import { data } from '../PortfolioData'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Portfolio.scss'


const Portfolio = () => {

    
    return <>
    <section id="portfolio-section">
        <div className="portfolio">
        <div className="portfolio__header wide">Our Recent Work</div>

            {
                data.map((data, index) => {
                    let { id, url, alt } = data
                    return (
                    <PortfolioItem key={id} id={index} url={url} alt={alt} />
                    )
                })
            }
        </div>
    </section>
    </>
}

export default Portfolio
