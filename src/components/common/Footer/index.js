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
          <div className="flex">
            <div className="footer__logo-wrapper">
              <Logo />
            </div>
            <div className="footer__desc">
              <Slogan />
            </div>
          </div>
          <div className="footer__desc-site">
            <p className="footer__site"> @ntbeauty.com.ua</p>
          </div>
          <div className="footer__col-localmobile">
            <p>Pochayna Event Hall</p>
            <p>{t("LOCATION1")}</p>
            <p>{t("LOCATION")}</p>
          </div>
        </div>
        <div className="footer__col-link display-none">
          <MenuLinks additionalClasses="footer__col-item" />
        </div >
        <div className="footer__col-local">
          <div className="box">
            <div className="footer__col-number">
              <p className="">{t("FOR_VISITORS")}, {t("MASTERS")}, {t("BUYERS")};</p>
              <p>{t("NAV_MENU_PARTICIPANTS")}:</p>
              <Number />
            </div>
            {/* <div className="footer__col-number">
              <p className="">:</p>
              <a href="tel:+380963191102" className="text-middle fonts-white">+38 096 319 1102</a>
            </div> */}
            <div className="footer__col-socials">
              <Socials />
            </div>
          </div>
        </div>
        <div className="footer__col-advertising">
          <div className="footer__col-advertising-text">
            <p>{t("FOOTER_COL_ADVERTISING")} by Pavlova Eleonora</p>
          </div>
          <div className="footer__col-advertising-infa flex">
            <div className="footer__col-advertising-icon">
              <img src={process.env.PUBLIC_URL + '/images/my-foto.png'} alt="foto" />
            </div>
            <div className="footer__col-advertising-box flex">
              <div className="footer__col-advertising-insta">
                <a href="https://www.instagram.com/pavl0vaelen/?hl=ru" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/my-insta.svg'} alt="insta" className="icon-size-little" />
                </a>
              </div>
              <div className="footer__col-advertising-telega">
                <a href="https://t.me/eleon_pavlova" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/telegram.png'} alt="telegram" className="icon-size-little" />
                </a>
              </div>
              <div className="footer__col-advertising-mail">
                <a href="mailto:nebrudko18@gmail.com" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/my-mail.svg'} alt="mail" className="icon-size-little" />
                </a>
              </div>
              <div className="footer__col-advertising-git display-none">
                <a href="https://github.com/EleonoraPavlova" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/my-github.svg'} alt="github" className="icon-size-little" />
                </a>
              </div>
              <div className="footer__col-advertising-skype display-none">
                <a href="https://join.skype.com/invite/Kf7ZnFPrzv6R" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/icon/skype.svg'} alt="skype" className="icon-size-little" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <div className="footer__second-block" >
          <p> ® 2021 All rights recerved.</p>
        </div >
      </div>
    </div>
  )
}