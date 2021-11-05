import { useTranslation } from 'react-i18next';

export default function MenuLink(props) {
    const { t } = useTranslation();

    return (
        <li className="text-middle navigationbar__box-item uppercase">
            <a href={props.href}>{t(props.localizationKey)}</a>
        </li>
    )
}