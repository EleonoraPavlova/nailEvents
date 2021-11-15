import './index.scss';
import LearnMoreBox from '../../common/LearnMoreBox';


const items = [
    // {
    //     title: 'LEARN_MORE',
    //     classes: "learn-box__button-blue",
    //     textbtn: "LEARN_MORE_WRITE",
    // },
    {
        title: 'LEARN_MORE1',
        classes: "learn-box__button-pink",
        textbtn: "LEARN_MORE_WRITE1",
        link: "https://docs.google.com/forms/d/1j7z0twQhWixVOJJWPNoL81tv3L0PhJFMU5k2RtRhdLc/viewform?edit_requested=true"
    },
    // {
    //     title: 'LEARN_MORE_US',
    //     classes: "learn-box__button-orang",
    //     textbtn: "LEARN_MORE_WRITE2",
    // },
    {
        title: 'LEARN_MORE_MASTER',
        classes: "learn-box__button-darkblue",
        textbtn: "LEARN_JOIN",
        link: "https://docs.google.com/forms/d/1wjp-v2rsrbP5UnlXPoLMS8nybmlSx0QAyuMz7IG05fY/viewform?edit_requested=true"
    },
    {
        title: 'LEARN_MORE_LOGO',
        classes: "learn-box__button-green",
        textbtn: "LEARN_MORE_WRITE4",
    }
]

export default function LearnMore() {
    return (<div className="more">
        <div className="more__flex flex">
            {items.map(item => <LearnMoreBox key={item.title} title={item.title} additionalClasses={item.classes} textbtn={item.textbtn} link={item.link} />)}
        </div>
    </div>)
}