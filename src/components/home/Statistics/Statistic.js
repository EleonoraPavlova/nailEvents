import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Counter from '../../common/Counter';
import './Statistic.scss';


export default function Statistic(props) {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className="statistic__wrapper flex-center">
      <div className="statistic__inner-icon">
        <img className="statistic__icon" src={`${process.env.PUBLIC_URL}/icon/${props.iconName}.png`} alt={props.iconName} />
      </div>

      <div ref={ref} className="statistic__num">
        {inView ? <Counter value={props.number} /> : null}+
      </div>
      <div className="statistic__desc">{t(props.description)}</div>
    </div>
  );

}