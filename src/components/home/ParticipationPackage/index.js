import './index.scss';
import ParticipationPackageItem from './ParticipationPackageItem';
import { useTranslation } from 'react-i18next';
import ButtonLearn from '../../common/ButtonLearn';

const items = [
  {
    title: 'PARTICIPATION_ITEM_TITLE1',
    description: 'PARTICIPATION_ITEM_DESCRIPTION1'
  },
  {
    title: 'PARTICIPATION_ITEM_TITLE2',
    description: 'PARTICIPATION_ITEM_DESCRIPTION2'
  },
  {
    title: 'PARTICIPATION_ITEM_TITLE3',
    description: 'PARTICIPATION_ITEM_DESCRIPTION3'
  },
  {
    title: 'PARTICIPATION_ITEM_TITLE4',
    description: 'PARTICIPATION_ITEM_DESCRIPTION4'
  },
  {
    title: 'PARTICIPATION_ITEM_TITLE5',
    description: 'PARTICIPATION_ITEM_DESCRIPTION5'
  },
  {
    title: 'PARTICIPATION_ITEM_TITLE6',
    description: 'PARTICIPATION_ITEM_DESCRIPTION6'
  }
]

export default function ParticipationPackage() {
  const { t } = useTranslation();
  return <div className="participation__wrapper" id="manufacturer">
    <h2 className="participation__title">
      {t('PARTICIPATION_TITLE')}
    </h2>
    <div className="participation__arrows-upper-wrapper">
      <div className="participation__arrows-upper">
        <div className="participation__arrows-inner">
          <div className="participation__arrows-internal">
          </div>
        </div>
      </div>
    </div>
    <div className="participation__items">
      {items.map((item, index) => <ParticipationPackageItem key={index} index={index + 1} {...item} />)}
    </div>
    <div>
      <a href="https://docs.google.com/forms/d/1j7z0twQhWixVOJJWPNoL81tv3L0PhJFMU5k2RtRhdLc/viewform?edit_requested=true" rel="noreferrer" target="_blank">
        <ButtonLearn additionalClasses="button-pink participation__button" textbtn={t("CALC")} />
      </a>
    </div>
  </div >
}