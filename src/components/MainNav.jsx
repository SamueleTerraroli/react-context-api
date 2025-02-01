import { NavLink } from "react-router-dom"

const MainNav = () => {
    return (
        <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <NavLink className='nav-link' aria-current='page' to='/'>Home Page</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' aria-current='page' to='/posts'>Posts</NavLink>
            </li>
        </ul>
    )
}

export default MainNav