import '../App.scss';
import './Main.scss'
import Intro from '../intro/Intro'
import Header from '../Header/Header'

const Main = () => {
    return (
        <div className="container">
            <Header link="Book Appointment" />
            <Intro/>
        </div>
    )
}

export default Main
