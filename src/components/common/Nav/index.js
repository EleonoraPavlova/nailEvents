import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import MenuLinks from './MenuLinks';
import './index.scss';
import Logo from '../Logo';
import { ReactComponent as Menu } from './menu.svg';
import { ReactComponent as Close } from './close.svg';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  const currentLanguage = i18n.language;
  return (
    <div className="navigationbar__wrapper">
      <div className="navigationbar__wrapper-buttonlng">
        <button className="navigationbar__button-lng text-middle" onClick={() => i18n.changeLanguage(currentLanguage === 'ua' ? 'en' : 'ua')}>{currentLanguage === 'ua' ? 'en' : 'ua'}</button>
      </div>
      <div className="navigationbar__wrapper-nav">
        <ul className="navigationbar__box">
          <li className="navigationbar__logo">
            <Logo />
          </li>
          <div className={`links-wrapper ${visible ? 'visible' : null}`}>
            <MenuLinks additionalClasses="text-middle navigationbar__box-item uppercase" />
          </div>
        </ul >
        <button className="navigation-button" onClick={() => setVisible(!visible)}>
          {visible ? <span className="navigation-button__close"><Close /></span> : <Menu />}
        </button>
        <div className="navigationbar__nav-right">
          <div className="navigationbar__nav-date flex">
            <div className="navigationbar__nav-calendar">
              <img src={process.env.PUBLIC_URL + '/icon/calendar.png'} alt="calendar" target="_blank" />
            </div>
            <div>
              <p className="text-normal text-gray ">{t("BANNER_DATE")}</p>
            </div>
          </div>
          <div className="navigationbar__nav-date flex">
            <div className="navigationbar__nav-time">
              <img src={process.env.PUBLIC_URL + '/icon/time.png'} alt="time" target="_blank" />
            </div>
            <div>
              <p className="text-normal text-gray "> 12.00 - 20.00</p>
            </div>
          </div>
          <div className="navigationbar__nav-local flex">
            <div className="navigationbar__nav-address">
              <img src={process.env.PUBLIC_URL + '/icon/address.png'} alt="address" target="_blank" />
            </div>
            <div>
              <p className="text-normal text-gray">KYIV, Pochayna Event Hall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}