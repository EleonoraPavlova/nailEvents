
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
    {
        link: 'https://t.me/tatialex',
        iconName: 'telegram'
    },
]

export default function Socials() {
    return (<div className="flex">
        {socials.map(social => <SocialLink key={social.link} {...social} />)}
    </div>)
}