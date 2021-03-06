import './index.scss';
import { useTranslation } from "react-i18next"


export default function Organizer(props) {
    const { t } = useTranslation();

    return (<div className="organizer">
        <div className="organizer__box">
            <div className="organizer__item-wrapper">
                <img src={process.env.PUBLIC_URL + '/images/org-image1.png'} alt="image1" />
            </div>
            <div className="organizer__text">
                <div className="organizer__title">
                    <p className="text-title-less">{t("ORGANIZER")}</p>
                </div>
                <div className="organizer__subtitle">
                    <p className="text-title-big uppercase-white">Nano Tech Beauty</p>
                </div>
                <div className="organizer__box-desc">
                    <p className="text-title">{t("ORGANIZER_DECS")} {t("ORGANIZER_DECS1")}</p>
                </div>
            </div>
        </div>
    </div >)
}