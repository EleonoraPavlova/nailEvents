import './Footer.scss'
import { useTranslation } from 'react-i18next';
import Slogan from '../Slogan';
import Logo from '../Logo';
import MenuLinks from '../Nav/MenuLinks';
import Number from '../../common/Number';
import Socials from '../Socials';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className='footer'>
      <div className="footer__upper-block">
        <div className="footer__col-logo">
          <div className="footer__logo-wrapper">
            <Logo />
          </div>
          <div className="footer__desc">
            <Slogan />
          </div>
          <div>
            <p className="footer__site"> @ntbeauty.com.ua</p>
          </div>
        </div>
        <div className="footer__col-link padding">
          <MenuLinks additionalClasses="footer__col-item" />
        </div>
        <div className="footer__col-local padding">
          <p>Pochayna Event Hall</p>
          <p>{t("LOCATION")}</p>
          <div className="footer__col-number">
            <Number />
          </div>
          <div className="footer__col-socials">
            <Socials />
          </div>
        </div>
        <div className="footer__col-advertising padding">
          <div className="footer__col-advertising-text">
            <p>{t("FOOTER_COL_ADVERTISING")} by Pavlova Eleonora</p>
          </div>
          <div className="footer__col-advertising-inner">
            <div className="footer__col-advertising-info">
              <div className="footer__col-advertising-icon">
                <img src={process.env.PUBLIC_URL + '/images/my-foto.png'} alt="foto" />
              </div>
              <div className="footer__col-advertising-contact flex">
                <a href="tel:+380687527904" className="fonts-white">+380687527904
                  <p className="fonts-white">Viber, Telegram</p>
                </a>
              </div>
            </div>
            <div className="footer__col-advertising-box flex-end">
              <div className="footer__col-advertising-insta">
                <a href="https://www.instagram.com/pavl0vaelen/?hl=ru" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/my-insta.svg'} alt="insta" className="icon-size-little" />
                </a>
              </div>
              <div className="footer__col-advertising-mail">
                <a href="mailto:nebrudko18@gmail.com" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/my-mail.svg'} alt="mail" className="icon-size-little" />
                </a>
              </div>
              <div className="footer__col-advertising-git">
                <a href="https://github.com/EleonoraPavlova" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/my-github.svg'} alt="github" className="icon-size-little" />
                </a>
              </div>
              <div className="footer__col-advertising-skype">
                <a href="https://join.skype.com/invite/Kf7ZnFPrzv6R" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/skype.svg'} alt="skype" className="icon-size-little" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__second-block" >
        <p> ® 2021 All rights recerved.</p>
      </div >
    </div >

  )
}