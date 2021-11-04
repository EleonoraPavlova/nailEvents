import './index.scss';
import { useTranslation } from 'react-i18next';
import CheckMark from './CheckMark';

export default function About() {
    const { t } = useTranslation();
    return <main className="about">
        <div className="about__container fonts-white">
            <div className="about__wrapper-left"></div>
            <div className="about__wrapper-right">
                <div className="about__title">
                    <p className="text-title-less">{t("ABOUT_TITLE")}</p>
                </div>
                <ul className="about__decs">
                    <li className="about__decs-item">
                        <div className="about__decs-check">
                            <CheckMark />
                        </div>
                        <p className="text-normal">{t("ABOUT_ITEM1")}</p>
                    </li>
                    <li className="about__decs-item">
                        <div className="about__decs-check">
                            <CheckMark />
                        </div>
                        <p className="text-normal">{t("ABOUT_ITEM2")}</p>
                    </li>
                    <li className="about__decs-item">
                        <div className="about__decs-check">
                            <CheckMark />
                        </div>
                        <p className="text-normal">{t("ABOUT_ITEM3")}</p>
                    </li>
                    <li className="about__decs-item">
                        <div className="about__decs-check">
                            <CheckMark />
                        </div>
                        <p className="text-normal">{t("ABOUT_ITEM4")}</p>
                    </li>
                    <li className="about__decs-item">
                        <div className="about__decs-check">
                            <CheckMark />
                        </div>
                        <p className="text-normal">{t("ABOUT_ITEM5")}</p>
                    </li>
                </ul>
            </div>

        </div>
    </main>
}
