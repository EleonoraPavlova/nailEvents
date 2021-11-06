import { useRef, useState, useEffect } from 'react';

// тривалість анімації в секундах
const duration = 3;


export default function Counter(props) {
  const part = props.value / (duration * 30);
  const [timestamp, setTimestamp] = useState(0);
  const interval = useRef();

  useEffect(() => {
    function tick() {
      setTimestamp(prevSeconds => prevSeconds + 1)
    }
    interval.current = setInterval(() => tick(), 1000 / 30)
  }, []);

  useEffect(() => {
    if (timestamp === (duration * 30)) {
      clearInterval(interval.current);
    }
  }, [timestamp])

  return <span>{ Math.floor(timestamp * part) }</span>;
}