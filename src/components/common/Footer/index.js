import './Footer.scss'
import { useTranslation } from 'react-i18next';
import Slogan from '../Slogan';
import Logo from '../Logo';
import MenuLinks from '../MenuLinks';
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
        <div className="footer__col-link">
          <MenuLinks additionalClasses="footer__col-item" />
        </div>
        <div className="footer__col-local">
          <p>Pochayna Event Hall</p>
          <p>{t("LOCATION")}</p>
          <div className="footer__col-number">
            <Number />
          </div>
        </div>
        <Socials />
      </div>
      <div className="footer__second-block" >
        <p> ® 2021 All rights recerved.</p>
      </div >
    </div>

  )
}