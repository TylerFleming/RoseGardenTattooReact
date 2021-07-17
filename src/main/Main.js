import '../App.scss';
import './Main.scss'
import Intro from '../intro/Intro'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
    return (
        <div className="container">
            <Header link="Book Appointment" />
            <Intro/>
            <Portfolio />
        </div>
    )
}

export default Main
