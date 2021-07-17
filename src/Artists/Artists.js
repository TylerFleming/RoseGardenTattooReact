
import { data } from '../ArtistsData'
import './Artists.scss'


const Artists = () => {
    return (
        <section id="artists-section">
            <div className="artists-grid-container">
                <div className="artists">
                    <h2 className="artists__headline">Meet The Artists</h2>
                </div>
                <div className="artist-list-container">
                        <ul>
                            <li>
                                {
                                    data.map( artist => {
                                        const { name } = artist
                                        return <button key={name} >{ name }</button>
                                    })
                                }
                            </li>
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default Artists
