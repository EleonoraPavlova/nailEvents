import Header from "../../components/home/Header"; // шапка сайта
import About from "../../components/home/About";  // про событие
// import Speakers from "../../components/home/Speakers"; // спикеры
import Statistics from "../../components/home/Statistics"; //статистика
// import OurPartners from "../../components/home/OurPartners";  // наши партнеры??
// import Subscribe from "../../components/home/Subscribe";  // подписка инста- розыгрыш
import Safety from "../../components/home/Safety";     // меры безопасности
import Map from "../../components/home/Map";        // карта проезда
// import Program from "../../components/home/Program";
import LearnMore from "../../components/home/LearnMore";


export default function Home() {
    return (<div>
        <Header />
        <About />
        {/* <Speakers /> */}
        <Statistics />
        {/* <Program /> */}
        {/* <OurPartners /> */}
        {/* <Subscribe /> */}
        <LearnMore />
        <Safety />
        <Map />
    </div>
    )
}
