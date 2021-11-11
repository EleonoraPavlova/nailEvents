import './index.scss';
import { useTranslation } from 'react-i18next';
import Socials from '../../common/Socials';
import Slogan from '../../common/Slogan';
import Number from '../../common/Number';


export default function Header() {
    const { t } = useTranslation();
    return <header className="topbar">
        <div className="topbar__bg">
            <div className="topbar__main">
                <div className="topbar__main-h1">
                    <h1 className="text-title-big topbar__main-title">Nano Tech Nail</h1>
                </div>
                <div className="topbar__main-slogan">
                    <Slogan />
                </div>
                <div className="topbar__main-about">
                    <h4 className="text-title-less">{t("ABOUT_TITLE")}</h4>
                </div>
            </div>
            <div className="topbar__footer">
                <div className="topbar__button flex-center">
                    {/* < href="https://docs.google.com/forms/d/1j7z0twQhWixVOJJWPNoL81tv3L0PhJFMU5k2RtRhdLc/viewform?edit_requested=true" rel="noreferrer" target="_blank"> */}
                    <button type="button" className="topbar__button-inside text-small">{t("BUY_TICKET")}</button>
                </div>
                <div className="topbar__social">
                    <div className="topbar__social-link flex-end">
                        <Socials />
                    </div>
                    <div className="topbar__social-tel flex-end">
                        <Number />
                    </div>
                </div>
            </div>
        </div>
    </header >
}