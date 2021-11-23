import './CircleNumber.scss';

export default function CircleNumber(props) {
  return <div className={"circle-number__outer " + props.additionalClasses}>
    <div className={"circle-number__inner " + props.additionalClasses}>
      {props.number}
    </div>
  </ div>
}