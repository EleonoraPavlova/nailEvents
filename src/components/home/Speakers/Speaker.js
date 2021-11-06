import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Counter from '../../common/Counter';
import './Speaker.scss';


export default function Speaker(props) {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div className="speaker-wrapper">
      <img className="speaker-icon" src={`${process.env.PUBLIC_URL}/icon/${props.iconName}.png`} alt={props.iconName} />

      <div ref={ref}>
        { inView ? <Counter value={props.number} /> : null }
      </div>
      <div>{t(props.description)}</div>
    </div>
  );

}