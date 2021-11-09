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
  {
    title: 'FOOD_TITLE',
    subtitle: 'FOOD_SUBTITLE',
    iconName: 'food'
  },
  {
    title: 'PASSPORT_TITLE',
    subtitle: '',
    iconName: 'passport'
  },
  {
    title: 'RESTRICTIONS_TITLE',
    subtitle: 'RESTRICTIONS_SUBTITLE',
    iconName: 'restrictions'
  },
  {
    title: 'DISTANCE_TITLE',
    subtitle: 'DISTANCE_SUBTITLE',
    iconName: 'distance'
  },


];

export default function Measures() {
  return measures.map(measure => <Measure key={measure.iconName} {...measure} />)
}