import './index.scss';
import { useTranslation } from 'react-i18next';

export default function ButtonLearn(props) {
    const { t } = useTranslation();
    return <div className={"flex-center  button-learn " + props.additionalClasses}>
        <a href={props.link} rel="noreferrer" target="_blank">
            <button type="button" className="button-learn__button-inside">{t(props.textbtn)}</button>

        </a>
    </div>


}