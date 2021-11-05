import './index.scss';
import { useTranslation } from 'react-i18next';
import Socials from './Socials';
import MenuLinks from './MenuLinks';



export default function Header() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language; // пишется где есть переключатель
    return <header className="topbar">
        <div className="topbar__bg">
            <div className="topbar__wrapper-buttonlng">
                <button className="topbar__button-lng text-middle" onClick={() => i18n.changeLanguage(currentLanguage === 'ua' ? 'en' : 'ua')}>{currentLanguage === 'ua' ? 'en' : 'ua'}</button>
            </div>
            <div className="topbar__wrapper-nav">
                <ul className="topbar__box">
                    <li className="topbar__logo">
                        <img src={process.env.PUBLIC_URL + '/icon/logo.png'} alt="logo" />
                    </li>
                    <MenuLinks />
                </ul >
                <div className="topbar__nav-right">
                    <div className="topbar__nav-date flex">
                        <div className="topbar__nav-calendar">
                            <img src={process.env.PUBLIC_URL + '/icon/calendar.png'} alt="calendar" target="_blank" />
                        </div>
                        <div>
                            <p className="text-normal text-gray ">{t("BANNER_DATE")}</p>
                        </div>
                    </div>
                    <div className="topbar__nav-date flex">
                        <div className="topbar__nav-time">
                            <img src={process.env.PUBLIC_URL + '/icon/time.png'} alt="time" target="_blank" />
                        </div>
                        <div>
                            <p className="text-normal text-gray "> 12.00 - 20.00</p>
                        </div>
                    </div>
                    <div className="topbar__nav-local flex">
                        <div className="topbar__nav-address">
                            <img src={process.env.PUBLIC_URL + '/icon/address.png'} alt="address" target="_blank" />
                        </div>
                        <div>
                            <p className="text-normal text-gray">KYIV, Pochayna Event Hall</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="topbar__main">
                <div className="topbar__main-h1">
                    <h1 className="text-title-big topbar__main-title">Nano Tech Beauty</h1>
                </div>
                <div className="topbar__main-slogan">
                    <h4 className="text-subtitle">{t("BANNER_SUBTITLE")}</h4>
                </div>
                <div className="topbar__main-about">
                    <h4 className="text-title-less">{t("ABOUT_TITLE")}</h4>
                </div>
            </div>
            <div className="topbar__button flex-center">
                <button type="button" className="topbar__button-inside text-small">{t("REGISTRATION")}</button>
            </div>
            <div className="topbar__social">
                <Socials />
                <div className="topbar__social-tel flex-end">
                    <a href="tel:+380 99 525 4865" className="text-middle fonts-white">+38 099 525 4865</a>
                </div>
            </div>
        </div>
    </header >
}