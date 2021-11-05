import './index.scss';

export default function Safety() {  ///карантийные меры безопасности
    return <div className="safety">
        <div className="safety">
            <img src={process.env.PUBLIC_URL + '/icon/temperature.png'} alt="temperature" />
        </div>
    </div>
}