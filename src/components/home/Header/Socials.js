
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
    return (<div className="topbar__social-link flex-end">
        {socials.map(social => <SocialLink {...social} />)}
    </div>)
}