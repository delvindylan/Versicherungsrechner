import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {

    

    return(

    <div>
        <nav className="nav">
            <Link to="/" className="site-title">Home</Link>
            <ul>
                <CustomLink to="/calculator">Calculator</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    </div>

    )
}

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
      )
}