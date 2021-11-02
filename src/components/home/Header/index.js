import './index.scss';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
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
                        <button style={{padding: '20px'}} onClick={() => i18n.changeLanguage(currentLanguage === 'ua' ? 'en' : 'ua')}>{ currentLanguage === 'ua' ? 'en' : 'ua' }</button>
                    </div>
                </div>
            </div>
            <div className="topbar__main topbar_zindexed">
                    <h1 className="text-title-big uppercase topbar__main-title">Nano Tech Beauty</h1>
                    <h4 className="text-subtitle white-text">{t('BANNER_SUBTITLE')}</h4>
                    <button type="button" className="topbar__button">{t('REGISTRATION')}</button>

            </div>
        </div>
    </header >
}