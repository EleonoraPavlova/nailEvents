import './Footer.scss'
import { useTranslation } from 'react-i18next';


export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className='footer'>
      <div className="footer__upper-block">
        <div className="footer__col-logo">
          <div className="footer__logo-wrapper">
            <img src={process.env.PUBLIC_URL + '/icon/logo.png'} alt="logo" />
          </div>
          <div className="footer__desc">
            <p>{t("BANNER_SUBTITLE")}</p>
          </div>
          <div>
            <p className='footer__site text-thin'> @ntbeauty.com.ua</p>
          </div>



        </div>
      </div >
      <div className=" footer__second-block" >
        <p> ® 2021 All rights recerved.</p>
      </div >
    </div >

  )
}