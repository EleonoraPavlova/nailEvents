import './index.scss';
import { useTranslation } from 'react-i18next';
import CheckMark from './CheckMark';

export default function About() {
    const { t } = useTranslation();
    return <main className="about" id="about">
        <div className="about__container">
            <ul className="about__decs">
                <li className="about__decs-item">
                    <div className="about__decs-check">
                        <CheckMark />
                    </div>
                    <p className="text-normal uppercase-white">{t("ABOUT_ITEM1")}</p>
                </li>
                <li className="about__decs-item">
                    <div className="about__decs-check">
                        <CheckMark />
                    </div>
                    <p className="text-normal uppercase-white">{t("ABOUT_ITEM2")}</p>
                </li>
                <li className="about__decs-item">
                    <div className="about__decs-check">
                        <CheckMark />
                    </div>
                    <p className="text-normal uppercase-white">{t("ABOUT_ITEM3")}</p>
                </li>
                <li className="about__decs-item">
                    <div className="about__decs-check">
                        <CheckMark />
                    </div>
                    <p className="text-normal uppercase-white">{t("ABOUT_ITEM4")}</p>
                </li>
                <li className="about__decs-item">
                    <div className="about__decs-check">
                        <CheckMark />
                    </div>
                    <p className="text-normal uppercase-white">{t("ABOUT_ITEM5")}</p>
                </li>
            </ul>
        </div>
    </main>
}
