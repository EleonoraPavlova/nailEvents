import { useTranslation } from 'react-i18next';

import './Measure.scss';
export default function Measure(props) {
  const { t } = useTranslation();
  return (
    <div className="measure-wrapper">
      <img className="measure-icon" src={`${process.env.PUBLIC_URL}/icon/${props.iconName}.png`} alt={props.iconName} />
      <div className="measure-title">{t(props.title)}</div>
      <div className="measure-subtitle">{t(props.subtitle)}</div>
    </div>
  );
}