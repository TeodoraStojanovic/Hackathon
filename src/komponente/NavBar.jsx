import { Link } from 'react-router-dom';
import {GiFarmer } from 'react-icons/gi';
function NavBar(){
return(
<div>
        <nav className="nav">
            <div className="nav__title"> <GiFarmer></GiFarmer></div>
                <ul className="nav__list">
                 
                    <li className="nav__item">   <Link className="link" to='/'>Home</Link></li>
                    <li className="nav__item"> <Link  className="link" to='/festivali'>Register</Link></li>
                    <li className="nav__item"> <Link   className="link" to='/omiljeni'>Log in</Link></li>
                    
                </ul>
        </nav>
    </div>
    
);
}
export default NavBar;