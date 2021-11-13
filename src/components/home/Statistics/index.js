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
        number: 10
    }
]

export default function Statistics() {
    // const { t } = useTranslation();
    return <div className="statistics">
        <div className="flex-between mobile-size">
            {statistics.map(statistic => <Statistic key={statistic.iconName} {...statistic} />)}
        </div>
    </div>
}