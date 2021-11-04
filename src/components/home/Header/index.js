import './index.scss';
import { useTranslation } from 'react-i18next';
import Socials from './Socials';
import MenuLinks from './MenuLinks';

export default function Header() {
    const { t } = useTranslation();
    return <header className="topbar">
        <div className="topbar__bg">
            <div className="topbar__wrapper-nav topbar_zindexed">
                <div className="topbar__nav flex">
                    <ul className="topbar__box flex">
                        <li className="topbar__logo">
                            <img src={process.env.PUBLIC_URL + '/icon/logo.png'} alt="logo" />
                        </li>
                        <MenuLinks />
                    </ul >
                </div>
                <Socials />
            </div>
            <div className="topbar__main topbar_zindexed flex">
                <div className="topbar__main-left">
                    <div className="topbar__main-h1">
                        <h1 className="text-title-big uppercase topbar__main-title">Nano Tech Beauty</h1>
                    </div>
                    <div className="topbar__main-slogan">
                        <h4 className="text-subtitle fonts-white">{t("BANNER_SUBTITLE")}</h4>
                    </div>
                    <div className="topbar__main-btn">
                        <button type="button" className="topbar__button text-small uppercase">{t("REGISTRATION")}</button>
                    </div>
                </div>
                <div className="topbar__main-right">
                    <div className="topbar__main-date flex">
                        <div className="topbar__main-calendar">
                            <img src={process.env.PUBLIC_URL + '/icon/calendar.png'} alt="calendar" target="_blank" />
                        </div>
                        <div>
                            <p className="text-normal fonts-white">{t("BANNER_DATE")}</p>
                        </div>
                    </div>
                    <div className="topbar__main-date flex">
                        <div className="topbar__main-time">
                            <img src={process.env.PUBLIC_URL + '/icon/time.png'} alt="time" target="_blank" />
                        </div>
                        <div>
                            <p className="text-normal fonts-white"> 12.00 - 20.00</p>
                        </div>
                    </div>
                    <div className="topbar__main-local flex">
                        <div className="topbar__main-address">
                            <img src={process.env.PUBLIC_URL + '/icon/address.png'} alt="address" target="_blank" />
                        </div>
                        <div>
                            <p className="text-normal fonts-white">KYIV, Pochayna Event Hall</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    </header >
}