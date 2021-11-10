import Header from "../../components/home/Header";
import About from "../../components/home/About";  // про событие
// import Speakers from "../../components/home/Speakers"; // спикеры
import Statistics from "../../components/home/Statistics"; //статистика
import YouWant from "../../components/home/YouWant";
// import OurPartners from "../../components/home/OurPartners";  // наши партнеры??
// import Subscribe from "../../components/home/Subscribe";  // подписка инста- розыгрыш
import Safety from "../../components/home/Safety";     // меры безопасности
import Map from "../../components/home/Map";
// import Program from "../../components/home/Program";
import LearnMore from "../../components/home/LearnMore";


export default function Home() {
    return (<div>
        <Header />
        <About />
        {/* <Speakers /> */}
        <Statistics />
        <YouWant />
        {/* <Program /> */}
        {/* <OurPartners /> */}
        {/* <Subscribe /> */}
        <LearnMore />
        <Safety />
        <Map />
    </div>
    )
}
