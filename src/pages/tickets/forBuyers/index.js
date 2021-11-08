import './index.scss';
import { useTranslation } from 'react-i18next';


export default function ForBuyers() {
    const { t } = useTranslation();
    return <div className="for-buyers">
        <div>
            <p>{t("BUY_TICKET")}</p>
        </div>

    </div>
}