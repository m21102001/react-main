import { Outlet, Link } from "react-router-dom";
import '../Css/Nav.css'
const Nav = () => {
    return (
        <>
            <nav>
                <div class="d-flex justify-content-between">
                    <div>
                        <Link class="as" to="Home"> <i class="fa-solid fa-a gr"></i> AVADA SPORTS</Link>
                    </div>
                    <div class="list">
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="FACILITIES">FACILITIES</Link>
                            </li>
                            <li>
                                <Link to="ACTIVITIES">ACTIVITIES</Link>
                            </li>
                            <li>
                                <Link to="BLOG">BLOG</Link>
                            </li>
                            <li>
                                <Link to="Home"> <button type="button" class="nn btn btn-success"><span class="jo"><i class="fa-solid fa-user-plus"></i> </span>JOIN NOW</button></Link>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-list-ul lock"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link class="dropdown-item" to="/">HOME</Link></li>
                            <li><Link class="dropdown-item" to="FACILITIES">FACILITIES</Link></li>
                            <li><Link class="dropdown-item" to="ACTIVITIES">ACTIVITIES</Link></li>
                            <li><Link class="dropdown-item" to="BLOG">BLOG</Link></li>
                        </ul>
                    </div>
                </div>
                    <div className="fixed">
                    <i class="sho fa-solid fa-folder"></i>
                    <i class="sh fa-solid fa-cart-shopping"></i>
                    </div>
            </nav>
            <Outlet />
        </>
    )

}


export default Nav;