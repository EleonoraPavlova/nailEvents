import { useTranslation } from "react-i18next"
import './ProgramItem.scss';

export default function ProgramItem(props) {
  const { t } = useTranslation();

  return (<div className="program-item__box flex">
    <div className="program-item__time flex-center">
      <div className="text-normal fonts-white">{props.timeSlot}</div>
    </div>
    <div className="text-normal">{t(props.title)}</div>
  </div>)
}