import { useTranslation } from 'react-i18next';
import './index.scss';
import CheckMark from '../../common/CheckMark/CheckMark';
import ButtonLearn from '../../common/ButtonLearn';

export default function Retailers() {  ///карантийные меры безопасности
    const { t } = useTranslation();
    return <div className="retailers">
        <div className="retailers__title">
            <h4 className="text-title">{t('RETAILERS')}</h4>
        </div>
        <ul>
            <li className="retailers__subtitle">
                <p className="uppercase">{t('RETAILERS_TITLE')}</p>
            </li>
            <li className="retailers__item flex">
                <div className="retailers__item-box">
                    <CheckMark additionalClassName="pink" />
                </div>
                <p className="text-normal">{t('RETAILERS_TEXT')}</p>
            </li>
            <li className="retailers__item flex">
                <div className="retailers__item-box">
                    <CheckMark additionalClassName="pink" />
                </div>
                <p className="text-normal">{t('RETAILERS_TEXT1')}</p>
            </li>
            <li className="retailers__item flex">
                <div className="retailers__item-box">
                    <CheckMark additionalClassName="pink" />
                </div>
                <p className="text-normal">{t('RETAILERS_TEXT2')}</p>
            </li>
            <div className="retailers__button flex">
                <a href="https://docs.google.com/forms/d/1dNHdhsLAq3HIeO_ysfaQboEO_pHo7-bKVhn7GZI3cBg/edit" rel="noreferrer" target="_blank">
                    <ButtonLearn additionalClasses="button-green" textbtn={t("REGISTRATION")} /></a>
            </div>
        </ul>
    </div>
}