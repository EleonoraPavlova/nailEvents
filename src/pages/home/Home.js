import Header from "../../components/home/Header"; // шапка сайта
import About from "../../components/home/About";  // про событие
import Speakers from "../../components/home/Speakers"; // спикеты
import Statistics from "../../components/home/Statistics"; //статистика
import OurPartners from "../../components/home/OurPartners";  // наши партнеры??
import Subscribe from "../../components/home/Subscribe";  // подписка инста- розыгрыш
import Safety from "../../components/home/Safety";     // меры безопасности
import Map from "../../components/home/Map";        // карта проезда
import Footer from "../../components/common/Footer";     // контакт информация и соц сети


export default function Home() {
    return (<div>
        <Header />
        <About />
        <Speakers />
        <Statistics />
        <OurPartners />
        <Subscribe />
        <Safety />
        <Map />
        <Footer />
    </div>
    )
}