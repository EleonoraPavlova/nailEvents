import './index.scss';
import Speaker from './Speaker';

const speakers = [
    {
        description: 'Відвідувачів повязаних з нейл індустрією',
        iconName: 'time',
        number: 1000
    },
    {
        description: 'нейл байерів візьмуть участь у заході',
        iconName: 'time',
        number: 100
    },
    {
        description: 'компаній виробників візьмуть участь у події',
        iconName: 'time',
        number: 30
    },
    {
        description: 'всесвітньо відомих експертів серед наших спікерів',
        iconName: 'time',
        number: 15
    }
]

export default function Speakers() {
    return <div className="draw">
        <div className="speakers__wrapper flex-between">
            {speakers.map(speaker => <Speaker {...speaker}/>)}
        </div>
    </div>
}