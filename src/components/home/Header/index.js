import './index.scss';

export default function header() {
    return <header className="topbar">
        <ul className="topbar__box flex-between">
            <li className="text-small topbar__box-item uppercase">
                <a href="#План-заходу">План заходу </a></li>
            <li className="text-small topbar__box-item uppercase">
                <a href="#Реєстрація/квитки">Реєстрація/квитки</a></li>
            <li className="text-small topbar__box-item uppercase">
                <a href="#Учасники">Учасники</a></li>
            <li className="text-small topbar__box-item uppercase">
                <a href="#Спікери">Спікери</a></li>
            <li className="text-small topbar__box-item uppercase">
                <a href="#Новорічна дискотека">Новорічна дискотека</a></li>
        </ul >
        <div className="topbar__contact flex">
            <div className="topbar__icon">
                <img src={process.env.PUBLIC_URL + '/icon/nailBurger.svg'} alt="nailBurger" />
            </div>
            <div className="topbar__icon-point flex">
                <div className="topbar__point">
                    <img src={process.env.PUBLIC_URL + '/icon/point.svg'} alt="point" />
                </div>
                <a href="https://pochayna.in.ua/ru" className="text-small uppercase">KYIV, Pochayna Event Hall</a>
            </div>
            <div className="topbar__icon-phone flex">
                <div className="topbar__phone">
                    <img src={process.env.PUBLIC_URL + '/icon/phone.svg'} alt="phone" />
                </div>
                <a href="tel:+38000000000">+38000000000</a>
            </div>
        </div>
    </header >
}