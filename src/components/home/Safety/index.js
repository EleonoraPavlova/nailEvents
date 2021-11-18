import { useTranslation } from 'react-i18next';
import './index.scss';
import Measures from './Measures';

export default function Safety() {  ///карантийные меры безопасности
    const { t } = useTranslation();
    return <div className="safety__wrapper">
        <div className="safety__title">
            <h2>{t('SAFETY_MEASURES')}</h2>
        </div>
        <div className="safety__measures">
            <Measures />
        </div>
    </div>
}