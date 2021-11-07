import { useTranslation } from 'react-i18next';

import './Measure.scss';
export default function Measure(props) {
  const { t } = useTranslation();
  return (
    <div className="measure flex-center">
      <div className="measure__wrapper-icon">
        <img className="measure-icon" src={`${process.env.PUBLIC_URL}/icon/${props.iconName}.png`} alt={props.iconName} />
      </div>
      <div className="measure__title">{t(props.title)}</div>
      <div className="measure__subtitle text-regular">{t(props.subtitle)}</div>
    </div>
  );
}