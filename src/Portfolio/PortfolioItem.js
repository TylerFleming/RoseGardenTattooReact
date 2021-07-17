import './Portfolio.scss'

const PortfolioItem = ({ id, url, alt }) => {
    return <>
    <div className={`portfolio__item item-${id}`}>
        <img key={id} src={url} alt={alt} />
    </div>
    </>
}

export default PortfolioItem
