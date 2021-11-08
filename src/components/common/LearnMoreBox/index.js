import './index.scss';

export default function LearnMoreBox(props) {
    return <div className="learn-box" >
        <div className="learn-box__title text-subtitle">{props.title}</div>
        <div className="learn-box__sketch">
            <p className="text-thin">{props.description}</p>
        </div>
        <div className="flex-end">
            <img className="advantageIcon__icon" alt={props.imageName} src={process.env.PUBLIC_URL + "/images/" + props.imageName + '.png'} />
        </div>
    </div>

}