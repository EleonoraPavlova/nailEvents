import { useTranslation } from 'react-i18next';
import './index.scss';
import ButtonLearn from '../../common/ButtonLearn';
import ParticipationPackageItem from '../ParticipationPackage/ParticipationPackageItem';

const items = [{
    description: 'RETAILERS_TEXT'
},
{
    description: 'RETAILERS_TEXT1'
},
{
    description: 'RETAILERS_TEXT2'
},
]


export default function Retailers() {
    const { t } = useTranslation();
    return <div className="retailers flex">
        <div className="retailers__title">
            <h4 className="text-title-less fonts-white">{t('RETAILERS')}</h4>
        </div>
        <div className="retailers__subtitle">
            <h6 className="text-title text-title-mobile">{t('RETAILERS_TITLE')}</h6>
        </div>
        <div className="retailers__arrows-upper-wrapper">
            <div className="retailers__arrows-left retailers__arrows"></div>
            <div className="retailers__arrows-right retailers__arrows"></div>
        </div>
        <div className="retailers__items">
            {items.map((item, index) => <ParticipationPackageItem key={index} index={index + 1} {...item} additionalClasses="items-bg" circleAdditionalClasses="retailers-inner retailers-circle" wrapperAdditionalClasses="wrapper-circle" itemShown={null} />)}
        </div>
        <div className="retailers__button flex">
            <ButtonLearn link="https://docs.google.com/forms/d/1dNHdhsLAq3HIeO_ysfaQboEO_pHo7-bKVhn7GZI3cBg/edit" additionalClasses="button-green" textbtn={t("REGISTRATION")} />
        </div>
    </div >
}