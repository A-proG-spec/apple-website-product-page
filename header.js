import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/"><i className="fab fa-apple"></i></Link>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><Link to="/Store">Store</Link></li>
                        <li><Link to="/Mac">Mac</Link></li>
                        <li><Link to="/IPad">iPad</Link></li>
                        <li><Link to="/IPhone">iPhone</Link></li>
                        <li><Link to="/Watch">Watch</Link></li>
                        <li><Link to="/Vision">Vision</Link></li>
                        <li><Link to="/Airpods">AirPods</Link></li>
                        <li><Link to="/Tv">TV & Home</Link></li>
                        <li><Link to="/Entertainment">Entertainment</Link></li>
                        <li><Link to="/Accessories">Accessories</Link></li>
                        <li><Link to="/Support">Support</Link></li>
                    </ul>
                </nav>
                <div className="nav-icons">
                    <i className="fas fa-search"></i>
                    <i className="fas fa-shopping-bag"></i>
                </div>
            </div>
        </header>
    )
}
export default Header;
