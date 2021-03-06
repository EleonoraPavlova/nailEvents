import './index.scss';
import { useTranslation } from 'react-i18next';
import CheckMark from '../../common/CheckMark/CheckMark';
import ButtonLearn from '../../common/ButtonLearn';


export default function YouWant() {
    const { t } = useTranslation();
    return <div className="you-want wrapper" id="ticket">
        <div className="you-want__left">
            <div className="you-want__image">
            </div>
            <div className="you-want__offer">
                <div className="you-want__title">
                    <h4 className="text-title uppercase">{t("YOU_WANT")}</h4>
                </div>
                <div className="you-want__subtitle">
                    <h6 className="uppercase">{t("YOU_WANT1")}</h6>
                </div>
                <ul className="you-want__box">
                    <li className="you-want__box-item">
                        <div className="you-want__box-check">
                            <div className="you-want__box-compon">
                                <CheckMark additionalClassName="black" />
                            </div>
                            <p className="text-big uppercase">{t("YOU_WANT2")}</p>
                        </div>
                    </li>
                    <li className="you-want__box-item">
                        <div className="you-want__box-check">
                            <div className="you-want__box-compon">
                                <CheckMark additionalClassName="black" />
                            </div>
                            <p className="text-big uppercase">{t("YOU_WANT3")}</p>
                        </div>
                    </li>
                    <li className="you-want__box-item">
                        <div className="you-want__box-check">
                            <div className="you-want__box-compon">
                                <CheckMark additionalClassName="black" />
                            </div>
                            <p className="text-big uppercase">{t("YOU_WANT4")}</p>
                        </div>
                    </li>
                    <li className="you-want__box-item">
                        <div className="you-want__box-check">
                            <div className="you-want__box-compon">
                                <CheckMark additionalClassName="black" />
                            </div>
                            <p className="text-big uppercase">{t("YOU_WANT5")}</p>
                        </div>
                    </li>
                </ul>
                <div className="you-want__agitation">
                    <div>
                        <p className="text-big uppercase">{t("ORGANIZER_AGITATION")}</p>
                    </div>
                    <div className="you-want__agitation-btns flex no-flex">
                        <div className="you-want__agitation-box">
                            <div className="you-want__agitation-button">
                                <ButtonLearn link="https://nano-tech-beauty.ticketforevent.com/" additionalClasses="button-pink" textbtn={t("BUY_TICKET")} />
                            </div>
                        </div>
                        <div>
                            <p className="text-big uppercase">{t("ORGANIZER_OR")}</p>
                        </div>
                        <div className="you-want__agitation-box">
                            <div className="you-want__agitation-button">
                                <ButtonLearn link="https://docs.google.com/forms/d/1wjp-v2rsrbP5UnlXPoLMS8nybmlSx0QAyuMz7IG05fY/viewform?edit_requested=true" additionalClasses="button-pink" textbtn={t("LEARN_MORE_WRITE3")} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="you-want__agitation-wrap">
                    <p className="text-middle">{t("ORGANIZER_FOR")}</p>
                </div>
                <div className="you-want__agitation-wrap">
                    <p className="text-big uppercase">{t("ORGANIZER_PRICE")}</p>
                </div>
            </div>
        </div>
    </div >
}