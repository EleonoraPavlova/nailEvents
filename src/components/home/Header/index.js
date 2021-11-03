import './index.scss';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language; // пишется где есть переключатель
    return <header className="topbar">
        <div className="topbar__bg">
            <div className="topbar__wrapper-nav topbar_zindexed">
                <div className="topbar__nav flex">
                    <ul className="topbar__box flex">
                        <li className="topbar__logo">
                            <img src={process.env.PUBLIC_URL + '/icon/logo.png'} alt="logo" />
                        </li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#План-заходу">{t('NAV_MENU_PLAN')}</a></li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#Реєстрація/квитки">{t('NAV_MENU_REGISTER')}</a></li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#Учасники">{t('NAV_MENU_PARTICIPANTS')}</a></li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#Спікери">{t('NAV_MENU_SPEAKERS')}</a></li>
                        <li className="text-middle topbar__box-item uppercase">
                            <a href="#Новорічна дискотека">{t('NAV_MENU_DISCO')}</a></li>
                    </ul >
                </div>
                <div className="topbar__social flex">
                    <div className="topbar__social-wrap">
                        <a href="https://www.instagram.com/pavl0vaelen/?hl=ru" target="_blank" rel="noreferrer" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/insta.svg'} alt="svg" target="_blank" /></a>
                    </div>
                    <div className="topbar__social-wrap">
                        <a href="tel:+380 99 525 4865" rel="noopener" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/call.svg'} alt="call" target="_blank" /></a>
                    </div>
                    <div className="topbar__social-wrap">
                        <a href="mailto: ntb.congress@gmail.com" target="_blank" rel="noreferrer" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/mail.svg'} alt="svg" target="_blank" className="topbar__social-img" /></a>
                    </div>
                    <div className="topbar__social-wrap">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/facebook.svg'} alt="facebook" target="_blank" /></a>
                    </div>
                    <div className="topbar__social-wrap topbar__social-wrap_youtube">
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="an">
                            <img src={process.env.PUBLIC_URL + '/icon/youtube.png'} alt="youtube" target="_blank" /></a>
                    </div>
                    <div>
                        <button onClick={() => i18n.changeLanguage(currentLanguage === 'ua' ? 'en' : 'ua')}>{currentLanguage === 'ua' ? 'en' : 'ua'}</button>
                    </div>
                </div>
            </div>
            <div className="topbar__main topbar_zindexed flex">
                <div className="topbar__main-left">
                    <div className="topbar__main-h1">
                        <h1 className="text-title-big uppercase topbar__main-title">Nano Tech Beauty</h1>
                    </div>
                    <div className="topbar__main-slogan">
                        <h4 className="text-subtitle white-text">{t("BANNER_SUBTITLE")}</h4>
                    </div>
                    <div className="topbar__main-btn">
                        <button type="button" className="topbar__button">{t("REGISTRATION")}</button>
                    </div>
                </div>
                <div className="topbar__main-right">
                    <div className="topbar__main-date flex">
                        <div className="topbar__main-calendar">
                            <img src={process.env.PUBLIC_URL + '/icon/calendar.png'} alt="calendar" target="_blank" />
                        </div>
                        <div>
                            <p className="text-normal white-text">{t("BANNER_DATE")}</p>
                        </div>
                    </div>
                    <div className="topbar__main-date flex">
                        <div className="topbar__main-time">
                            <img src={process.env.PUBLIC_URL + '/icon/time.png'} alt="time" target="_blank" />
                        </div>
                        <div>
                            <p className="text-normal white-text"> 12.00 - 20.00</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    </header >
}