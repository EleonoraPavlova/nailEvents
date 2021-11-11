import './CircleNumber.scss';

export default function CircleNumber(props) {
  return <div className="circle-number__outer">
    <div className="circle-number__inner">
      {props.number}
    </div>
  </div>
}