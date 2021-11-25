import './index.scss';
import { useTranslation } from 'react-i18next';

export default function SpeakersBox(props) {
    const { t } = useTranslation();
    return <div className="speakers-box flex">
        <div className="speakers-box__wrapper-icon">
            <img className="speakers-box__icon" alt={props.imageName} src={process.env.PUBLIC_URL + "/images/" + props.imageName + '.png'} />
        </div>
        <div className="speakers-box__title text-subtitle">{t(props.title)}</div>
        <div className="speakers-box__desc">
            <p className="text-middle">{t(props.description)}</p>
        </div>
    </div>
}