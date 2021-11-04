import MenuLink from "./MenuLink";
const links = [
    {
        href: '#Event-plan',
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

];
export default function MenuLinks() {
    return links.map(link => <MenuLink {...link} />);
}