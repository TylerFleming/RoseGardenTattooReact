// import { useEffect, useRef } from "react"
import PortfolioItem from "./PortfolioItem"
import './Portfolio.scss'
import { data } from '../PortfolioData'

const Portfolio = () => {
    return <>
    <section id="portfolio-section">
        <div className="portfolio">
        <div className="portfolio__header">Our Recent Work</div>
            {
                data.map((data, index) => {
                    let { id, url, alt } = data
                    return <>
                    <PortfolioItem id={index} key={id} url={url} alt={alt}  />
                    </>
                })
            }
        </div>
    </section>
    </>
}

export default Portfolio
