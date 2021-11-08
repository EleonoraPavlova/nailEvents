import './index.scss';
import { useTranslation } from 'react-i18next';
import LearnMoreBox from '../../common/LearnMoreBox';


const items = [
    {
        title: 'Mobile Game Development',
        imageName: "button-blue"
    },
    {
        title: 'PC Game Development',
        imageName: "button-blue"
    },
    {
        title: 'PS4 Game Development',
        imageName: "button-darkblue"
    },
]

export default function LearnMore() {
    const { t } = useTranslation();
    return (<div className="more flex">
        <div>
            {items.map(item => <LearnMoreBox title={item.title} key={item.title} imageName={item.imageName} />)}
        </div>
        <div>
            <LearnMoreBox />
        </div>
        <div>
            <LearnMoreBox />
        </div>

    </div>)
}