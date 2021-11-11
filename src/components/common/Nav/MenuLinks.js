import MenuLink from "./MenuLink";
const links = [
    {
        href: '/#about',
        localizationKey: 'NAV_MENU_PLAN'
    },
    {
        href: '/#ticket',
        localizationKey: 'NAV_MENU_REGISTER'
    },
    {
        href: '/#manufacturer',
        localizationKey: 'NAV_MENU_PARTICIPANTS'
    },
    {
        href: '/#speakers',
        localizationKey: 'NAV_MENU_SPEAKERS'
    },

];
export default function MenuLinks(props) {
    return links.map(link => <MenuLink additionalClasses={props.additionalClasses} key={link.localizationKey} {...link} />);
}