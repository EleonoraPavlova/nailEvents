import './index.scss';
import { useTranslation } from 'react-i18next';
import ButtonLearn from '../ButtonLearn';

export default function LearnMoreBox(props) {
    const { t } = useTranslation();
    return <div className="learn-box flex">
        <div className="learn-box__title">{t(props.title)}</div>
        <ButtonLearn additionalClasses={props.additionalClasses} textbtn={props.textbtn} link={props.link} />
    </div>
}