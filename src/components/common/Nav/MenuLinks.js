import MenuLink from "./MenuLink";
const links = [
    {
        href: {
            pathname: "/",
            hash: '#about',

        },
        localizationKey: 'NAV_MENU_PLAN'
    },
    {
        href: '/tickets',
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