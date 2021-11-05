import './index.scss';
import { useTranslation } from 'react-i18next';

export default function Slogan() {
    const { t } = useTranslation();
    return <span className="slogan">{t("BANNER_SUBTITLE")}</span>
}