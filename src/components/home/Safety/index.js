import { useTranslation } from 'react-i18next';
import './index.scss';

import Measures from './Measures';

export default function Safety() {  ///карантийные меры безопасности
    const { t } = useTranslation();
    return <div className="safety-wrapper">
        <h2>{t('SAFETY_MEASURES')}</h2>
        <div className="measures-wrapper">
            <Measures />
        </div>
    </div>
}