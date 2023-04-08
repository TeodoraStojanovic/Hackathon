import { Link } from 'react-router-dom';
import {GiFarmer } from 'react-icons/gi';

function NavBar(){
return(
<div>
        <nav className="nav">
            <div className="nav__title"> <GiFarmer></GiFarmer></div>
                <ul className="nav__list">
                 
                <li className="nav__item">   <Link className="link" to='/'>Home</Link></li>
                    <li className="nav__item"> <Link className="link" to='/MakeGarden'>Make garden</Link></li>
                    <li className="nav__item">   <Link className="link" to='/yourgarden'>Your garden</Link></li>
                    <li className="nav__item"> <Link  className="link" to='/register'>Register</Link></li>
                    <li className="nav__item"> <Link   className="link" to='/login'>Log in</Link></li>
                    
                    
                </ul>
        </nav>
    </div>
    
);
}
export default NavBar;