import './index.scss';
import { useTranslation } from 'react-i18next';
import ButtonLearn from '../../common/ButtonLearn';

export default function Bonus() {
    const { t } = useTranslation();
    return <div className="bonus fonts-white">
        <div className="bonus__text">
            <div className="bonus__subtitle">
                <p className="text-big">{t("BONUS")}</p>
            </div>
            <div className="bonus__item black-text">
                <p className="text-big">{t("BONUS_GIFT1")}</p>
            </div>
            <div className="bonus__item bonus__item-1 black-text">
                <p className="text-big">{t("BONUS_TEXT")}</p>
            </div>
            <div className="bonus__item bonus__item-1 black-text">
                <p className="text-big">{t("BONUS_TEXT1")}</p>
            </div>
            <div className="bonus__item bonus__item-2 black-text">
                <p className="text-big">{t("BONUS_TEXT2")}</p>
            </div>
            <div className="bonus__item bonus__item-3 black-text">
                <p className="text-big">{t("BONUS_TEXT3")}</p>
            </div>
            <div className="bonus__item black-text">
                <p className="text-big">{t("BONUS_TEXT4")}</p>
            </div>
            <div className="bonus__item bonus__item_date black-text">
                <p className="text-title-less bonus-text">{t("BONUS_TEXT5")} Pochayna Event Hall</p>
            </div>
            <div className="bonus__item-box flex no-flex">
                <div className="bonus__item-buy black-text">
                    <p className="text-big">{t("BONUS_TEXT6")}</p>
                </div>
                <div className="bonus__button">
                    <ButtonLearn additionalClasses="button-pink bonus-shadow" textbtn={t("BUY_TICKET")} />
                </div>
            </div>
            <div className="bonus__questions black-text">
                <p className="text-small">{t("LEARN_MORE")}</p>
            </div>
        </div>
    </div>
}