import './index.scss';
import { useTranslation } from 'react-i18next';
import SpeakersBox from "../../common/SpeakersBox";


const items = [
    {
        title: 'SPEAKER1',
        imageName: "speaker1",
        description: 'SPEAKER1_DESC'
    },
    {
        title: 'SPEAKER2',
        imageName: "speaker2",
        description: 'SPEAKER2_DESC'
    }
]

export default function Speakers() {
    const { t } = useTranslation();
    return <div className="speakers" id="speakers">
        <div className="speakers__title">
            <h4 className="text-subtitle uppercase">{t("SPEAKERS_TITLE")}</h4>
        </div>
        <div className="speakers__box">
            {items.map(item => <SpeakersBox title={item.title} key={item.title} description={item.description} imageName={item.imageName} />)}
        </div>
    </div>
}