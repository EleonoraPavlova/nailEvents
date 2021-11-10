import './index.scss';
import { useTranslation } from "react-i18next"


export default function Organizer(props) {
    const { t } = useTranslation();

    return (<div className="organizer">
        <div className="organizer__box">
            <div className="organizer__items flex">
                <div className="organizer__item-wrapper">
                    <img src={process.env.PUBLIC_URL + '/images/org-image1.png'} alt="image1" />
                </div>
                <div className="organizer__item-wrapper index">
                    <img src={process.env.PUBLIC_URL + '/images/org-image2.png'} alt="image2" />
                </div>
                <div className="organizer__item-wrapper">
                    <img src={process.env.PUBLIC_URL + '/images/org-image3.png'} alt="image3" />
                </div>
                <div className="organizer__item-wrapper">
                    <img src={process.env.PUBLIC_URL + '/images/org-image4.png'} alt="image3" />
                </div>
            </div>
            <div className="organizer__text">
                <div className="organizer__title">
                    <p className="text-title">{t("ORGANIZER")}</p>
                </div>
                <div className="organizer__subtitle">
                    <p className="text-title uppercase">Nano Tech Beauty</p>
                </div>
                <div>
                    <p className="text-normal">{t("ORGANIZER_DECS")}</p>
                </div>
            </div>
        </div>
    </div >)
}