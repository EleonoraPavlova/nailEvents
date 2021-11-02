import './index.scss';

export default function header() {
    return <header className="topbar">
        <div className="topbar__bg">
            <div className="topbar__wrapper-nav">
                <div className="topbar__nav flex">
                    <ul className="topbar__box flex">
                        <li className="topbar__logo">
                            <img src={process.env.PUBLIC_URL + '/icon/logo.png'} alt="logo" />
                        </li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#План-заходу">План заходу </a></li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#Реєстрація/квитки">Реєстрація/квитки</a></li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#Учасники">Учасники</a></li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#Спікери">Спікери</a></li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#Новорічна дискотека">Новорічна дискотека</a></li>
                    </ul >
                </div>
                <div className="topbar__social flex">
                    <div className="topbar__social-wrap">
                        <a href="https://www.instagram.com/pavl0vaelen/?hl=ru" target="_blank" rel="noopener" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/insta.svg'} alt="svg" target="_blank" /></a>
                    </div>
                    <div className="topbar__social-wrap">
                        <a href="tel:+380 99 525 4865" rel="noopener" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/call.svg'} alt="call" target="_blank" /></a>
                    </div>
                    <div className="topbar__social-wrap">
                        <a href="mailto: ntb.congress@gmail.com" target="_blank" rel="noopener" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/mail.svg'} alt="svg" target="_blank" className="topbar__social-img" /></a>
                    </div>
                    <div className="topbar__social-wrap">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/facebook.svg'} alt="facebook" target="_blank" /></a>
                    </div>
                    <div className="topbar__social-wrap topbar__social-wrap_youtube">
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/youtube.png'} alt="youtube" target="_blank" /></a>
                    </div>
                </div>
            </div>
            <div className="topbar__main">
                <div >
                    <h1 className="text-title-big uppercase topbar__main-title">Nano Tech Beauty</h1>
                </div>
                <div>
                    <h4 className="text-subtitle white-text">Максимум можливостей - безліч інновацій – море задоволень</h4>
                </div>
                <div>
                    <button type="button" className="topbar__button">Реєстрація</button>
                </div>
            </div>
        </div>
    </header >
}