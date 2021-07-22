import '../App.scss';
import './Main.scss'
import Intro from '../intro/Intro'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio';
import Artists from '../Artists/Artists';
 
const Main = () => {
    return (
        <div className="container">
            <Header link="map-section" />
            <Intro/>
            <Portfolio />
            <Artists />
        </div>
    )
}

export default Main
