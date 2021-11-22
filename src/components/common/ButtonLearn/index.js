import './index.scss';
import { useTranslation } from 'react-i18next';
export default function ButtonLearn(props) {
    const { t } = useTranslation();
    return <a className={`flex-center  button-learn ${props.additionalClasses}`} href={props.link} rel="noreferrer" target="_blank">
        {t(props.textbtn)}
    </a>
}