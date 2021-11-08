import { NavLink } from "react-router-dom";


export default function Logo() {
    return <div className="logo">
        <NavLink to="/">
            <img src={process.env.PUBLIC_URL + '/icon/logo.png'} alt="logo" />
        </NavLink>
    </div>
}