import Header from "../home/Header"; // шапка сайта
import About from "../home/About";  // про событие
import Speakers from "../home/Speakers"; // спикеты
import Statistics from "../home/Statistics"; //статистика
import OurPartners from "../home/OurPartners";  // наши партнеры??
import Subscribe from "../home/Subscribe";  // подписка инста- розыгрыш
import Safety from "../home/Safety";     // меры безопасности
import Map from "../home/Map";        // карта проезда
import Footer from "../home/Footer";     // контакт информация и соц сети


export default function Home() {
    return (<div>
        {/* <Header /> */}
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
