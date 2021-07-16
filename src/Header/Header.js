import './Header.scss'

const Header = ({ link }) => {
    return (
        <header>
            <nav>
                <a href={`#${link.split(' ').join('')}`}>{link}</a>
            </nav>
        </header>
    )
}

export default Header
