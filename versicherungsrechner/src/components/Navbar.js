export default function Navbar() {


    return(

    <div>
        <nav className="nav">
            <a href="/" className="site-title">Homepage</a>
            <ul>
                <li className="active">
                    <a href="/versicherungsrechner">Versicherungsrechner</a>
                </li>
                <li className="active">
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    </div>

    )
}