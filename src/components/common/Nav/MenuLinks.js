import MenuLink from "./MenuLink";
const links = [
    {
        href: '#About the event',
        localizationKey: 'NAV_MENU_PLAN'
    },
    {
        href: '#Registration/tickets',
        localizationKey: 'NAV_MENU_REGISTER'
    },
    {
        href: '#Participants',
        localizationKey: 'NAV_MENU_PARTICIPANTS'
    },
    {
        href: '#Speakers',
        localizationKey: 'NAV_MENU_SPEAKERS'
    },
    // {
    //     href: 'tel:+380 99 525 4865',
    //     localizationKey: '+380 99 525 4865',
    //     classes: 'topbar__social-tel'
    // },

];
export default function MenuLinks() {
    return links.map(link => <MenuLink key={link.localizationKey} {...link} />);
}