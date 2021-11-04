import "./CheckMark.scss";

export default function CheckMark() {
    return (<div className="check-mark">
        <svg className="check-mark__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" className="check-mark__check"></path><circle cx="26" cy="26" r="25" fill="none" className="check-mark__circle"></circle></svg>
    </div>)
}