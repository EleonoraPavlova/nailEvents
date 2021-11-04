import { useTranslation } from 'react-i18next';
import SocialLink from './SocialLink';


const socials = [
    {
        link: 'https://www.instagram.com/nanotech_beauty/',
        iconName: 'insta'
    },
    {
        link: 'https://www.facebook.com/Nano-Tech-Beauty-105526615271644/?ref=pages_you_manage',
        iconName: 'facebook'
    },
]

export default function Socials() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language; // пишется где есть переключатель
    return (<div className="topbar__social flex">
        {socials.map(social => <SocialLink {...social} />)}
        <div className="topbar__wrapper-buttonlng">
            <button className="topbar__button-lng text-middle" onClick={() => i18n.changeLanguage(currentLanguage === 'ua' ? 'en' : 'ua')}>{currentLanguage === 'ua' ? 'en' : 'ua'}</button>
        </div>
    </div>)
}