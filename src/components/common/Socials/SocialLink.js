export default function SocialLink(props) {
    return (<div className={`topbar__social-wrap ${props.additionalClasses ? props.additionalClasses : ''}`}>
        <a href={props.link} target="_blank" rel="noreferrer" className="an">
            <img src={`${process.env.PUBLIC_URL}/icon/${props.iconName}.png`} alt={props.iconName} /></a>
    </div>)
}