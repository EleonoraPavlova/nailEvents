import './index.scss';
import Statistic from './Statistic';
// import { useTranslation } from 'react-i18next';


const statistics = [
    {
        description: 'STATISTICS_VISITORS',
        iconName: 'visitors',
        number: 1500
    },
    {
        description: 'STATISTICS_NAILBUYERS',
        iconName: 'nail-buyers',
        number: 100
    },
    {
        description: 'STATISTICS_COMPANY',
        iconName: 'company',
        number: 30
    },
    {
        description: 'STATISTICS_EXPERTS',
        iconName: 'experts',
        number: 15
    }
]

export default function Statistics() {
    // const { t } = useTranslation();
    return <div className="statistics wrapper">
        <div className="flex-between">
            {statistics.map(statistic => <Statistic {...statistic} />)}
        </div>
    </div>
}