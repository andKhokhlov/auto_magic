import './Header.css'
import LOGO from '../logo.svg'
import logo2 from '../ico/Logo2.png'

import {Link} from "react-router-dom";
function Header(){
    return(
        <header className='head'>
            <div className='logotip'>
                <Link to="/">
                    <img className='logo' src={logo2} alt='logo'/>
                </Link>

            </div>
            <div className='head-card'>
                <Link to="/">Каршеринг</Link>
                <Link to="/contact">Контакты</Link>
                <a>О нас </a>
            </div>
        </header>
    );
}



export default Header;