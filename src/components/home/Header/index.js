import './index.scss';
import { useTranslation } from 'react-i18next';
import Socials from './Socials';

export default function Header() {
    const { t } = useTranslation();
    return <header className="topbar">
        <div className="topbar__bg">
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