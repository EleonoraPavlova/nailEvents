import CircleNumber from "./CircleNumber"
import './ParticipationPackageItem.scss'
import { useTranslation } from "react-i18next"

export default function ParticipationPackageItem(props) {
  const { t } = useTranslation()
  return <div className='participation-package-item'>
    <div className={"participation-package-item__circle " + props.wrapperAdditionalClasses}>
      <CircleNumber number={props.index} additionalClasses={props.circleAdditionalClasses} />
    </div>

    {props.itemShown ? <div className='participation-package-item__title'>{t(props.title)}</div> : null}
    <div className="participation-package-item__description_wrapper">
      <div className={`participation-package-item__description + ${props.additionalClasses}`}>
        {t(props.description)}
      </div>
    </div>
  </div >
}