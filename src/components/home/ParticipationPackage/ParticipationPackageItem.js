import CircleNumber from "./CircleNumber"
import './ParticipationPackageItem.scss'
import { useTranslation } from "react-i18next"

export default function ParticipationPackageItem(props) {
  const { t } = useTranslation()
  return <div className='participation-package-item'>
    <div className="participation-package-item__circle">
      <CircleNumber number={props.index} />
    </div>

    <div className='participation-package-item__title'>{t(props.title)}</div>
    <div className="participation-package-item__description_wrapper">
      <div className="participation-package-item__description">
        {t(props.description)}
      </div>
    </div>
  </div>
}