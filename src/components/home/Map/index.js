
import { useTranslation } from 'react-i18next';

export default function Map() {
    const { t } = useTranslation();
    return <div className="draw">
        <div>
            <iframe title={t("ROAD_MAP")} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.9340115481375!2d30.49511807773916!3d50.49093318474408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd3205b54bf5%3A0x80adff4aa7e7e5c6!2sPochayna%20Event%20Hall!5e0!3m2!1sru!2sua!4v1636026688456!5m2!1sru!2sua" width="100%" height="500" allowFullScreen="" loading="lazy"></iframe>
        </div>
    </div >
}