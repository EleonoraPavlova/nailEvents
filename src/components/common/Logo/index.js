
export default function Logo() {
    return <div className="logo">
        <img src={process.env.PUBLIC_URL + '/icon/logo.png'} alt="logo" />
    </div>
}