import Header from "../../components/home/Header";
import Organizer from "../../components/home/Organizer";
import About from "../../components/home/About";
// import Speakers from "../../components/home/Speakers"; // спикеры
import Statistics from "../../components/home/Statistics";
import YouWant from "../../components/home/YouWant";
// import OurPartners from "../../components/home/OurPartners";  // наши партнеры??
// import Subscribe from "../../components/home/Subscribe";  // подписка инста- розыгрыш
import Safety from "../../components/home/Safety";
import Map from "../../components/home/Map";
// import Program from "../../components/home/Program";
import LearnMore from "../../components/home/LearnMore";
import LetsGo from "../../components/home/Bonus";
import ParticipationPackage from "../../components/home/ParticipationPackage";
import Retailers from "../../components/home/Retailers";

export default function Home() {
    return (<div>
        <Header />
        <Organizer />
        <About />
        <YouWant />
        {/* <Speakers /> */}
        <Statistics />
        {/* <Program /> */}
        {/* <OurPartners /> */}
        {/* <Subscribe /> */}
        <LearnMore />
        <ParticipationPackage />
        <Retailers />
        <LetsGo />
        <Safety />
        <Map />
    </div>
    )
}
