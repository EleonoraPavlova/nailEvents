import './index.scss';
import { useTranslation } from 'react-i18next';
import LearnMoreBox from '../../common/LearnMoreBox';

export default function LearnMore() {
    const { t } = useTranslation();
    return (<div className="more flex">
        <div>
            <LearnMoreBox />
        </div>
        <div>
            <LearnMoreBox />
        </div>
        <div>
            <LearnMoreBox />
        </div>

    </div>)
}