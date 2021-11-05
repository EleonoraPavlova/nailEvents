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

];
export default function MenuLinks(props) {
    return links.map(link => <MenuLink additionalClasses={props.additionalClasses} key={link.localizationKey} {...link} />);
}