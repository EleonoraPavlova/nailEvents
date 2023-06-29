import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProgramItem from './ProgramItem';
import './index.scss';


const items = [
  {
    timeSlot: '09:00-10:00',
    title: 'PROGRAM_ITEM',
  },
  {
    timeSlot: '10:00-10:30',
    title: 'PROGRAM_ITEM1',
  },
  {
    timeSlot: '10:30-11:30',
    title: 'PROGRAM_ITEM2',
  },
  {
    timeSlot: '11:30-13:00',
    title: 'PROGRAM_ITEM3',
  },
  {
    timeSlot: '13:00-14:00',
    title: 'PROGRAM_ITEM7',
  },
  {
    timeSlot: '14:00-16:00',
    title: 'PROGRAM_ITEM4',
  },
  {
    timeSlot: '16:00-18:00',
    title: 'PROGRAM_ITEM3',
  },
  {
    timeSlot: '18:00-20:00',
    title: 'PROGRAM_ITEM6',
  },
  {
    timeSlot: '18:00-20:00',
    title: 'PROGRAM_ITEM5',
  }
];

const substracted = items.slice(0, 3);

export default function Program() {
  const { t } = useTranslation();
  const [isShown, setIsShown] = useState(false);
  const target = isShown ? items : substracted;
  return (<div className="program wrapper">
    <div className="program__wrap-title">
      <h4 className="program__title uppercase">{t("PROGRAM_TITLE")}</h4>
    </div>
    {target.map(slot => <ProgramItem key={slot.title} {...slot} />)}
    <div className="flex-center">
      <button onClick={() => setIsShown(!isShown)} className="program__button text-normal program-item__text fonts-white">{t(isShown ? 'BUTTON_CLICK' : 'BUTTON_ALL')}</button>
    </div>
  </div>);
}