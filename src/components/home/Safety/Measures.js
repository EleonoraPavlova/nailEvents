import Measure from "./Measure";


const measures = [
  {
    title: 'PROTECTION_MEANS',
    subtitle: 'PROTECTION_MEANS_SUBTITLE',
    iconName: 'masked'
  },
  {
    title: 'TEMPERATURE_SCREENING',
    subtitle: 'TEMPERATURE_SCREENING_SUBTITLE',
    iconName: 'scanning'
  },
  
  

];

export default function Measures() {
  return measures.map(measure => <Measure {...measure} />)
}