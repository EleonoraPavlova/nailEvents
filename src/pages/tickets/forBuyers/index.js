import './index.scss';
import { useTranslation } from 'react-i18next';


export default function ForBuyers() {
    const { t } = useTranslation();
    return <div className="for-buyers">
        <div className="for-buyers__image"></div>
        <div className="for-buyers__text">

        </div>
        <div className="for-buyers">
            <button type="button" className="for-buyers__button text-normal fonts-white">{t("BUY_TICKET")}</button>
        </div>


    </div>
}