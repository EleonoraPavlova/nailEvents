import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function MenuLink(props) {
    const { t } = useTranslation();
    return (
        <li className={props.additionalClasses}>
            <NavLink to={props.href}>{t(props.localizationKey)}</NavLink >
        </li>
    )
}