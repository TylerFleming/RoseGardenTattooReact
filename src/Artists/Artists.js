import { useEffect } from 'react'
import { data } from '../ArtistsData'
import './Artists.scss'
import twitterIcon from '../images/twitter-icon.webp'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'




const Artists = () => {

    const changeArtist = (e) => {

        const dataSet = e.target.dataset.artist;
        const artist = document.getElementById(dataSet)
        const container = [...document.querySelectorAll('.render-container')]
        container.forEach(container => container.classList.remove('active'))
        
        const artistTL = gsap.timeline()
        .call(() => {artist.classList.add('active')})
        .fromTo('.images__artist', {opacity: 0, height: 0,}, {opacity: 1, height: '100%', duration: 1})
        .fromTo('.images__description', {opacity: 0, height: 0,}, {opacity: 1, height: '225px'})
        .fromTo('.artist-name', {opacity: 0, translateY: '100%',}, {opacity: 1, translateY:'0%'})
        .fromTo('.artist-description', {opacity: 0, translateY: '100%',}, {opacity: 1, translateY:'0%'})
    }

    return (
        <section id="artists-section">
            <div className="artists-grid-container">
                <div className="artists">
                    <div className="artists__headline__container">
                    <h2 className="artists__headline">Meet The </h2> <span className="break">Artists</span>
                    </div>
                </div>
                <div className="artist-list-container">
                        <ul>
                            <li>
                                {
                                    data.map( artist => {
                                        const { name } = artist
                                        return <button onClick={changeArtist} data-artist={name} key={name} >{ name }</button>
                                    })
                                }
                            </li>
                        </ul>
                </div>
                <div className="artist-information-container">
                        {
                            data.map( artist => {
                                const { fullName, twitter, description, photo, id, name  } = artist
                                return (
                                    <div key={id} id={name} className={id === 1 ? 'render-container active' : 'render-container'}>
                                    <img src={photo} alt="" className="images__artist" />
                                    <div className="images__description">
                                        <div className="images__name">
                                            <span className="artist-name">{fullName}<a rel="noreferrer noopener" target="_blank" href={twitter}><img className="images__social-icon" src={twitterIcon} alt="Twitter icon" /></a></span>
                                        </div>
                                        <p className="artist-description">{description}</p>
                                    </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </section>
    )
}

export default Artists
