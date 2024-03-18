import './Header.css'
import LOGO from '../logo.svg'

import {Link} from "react-router-dom";
function Header(){
    return(
        <header className='head'>
            <div className='logotip'>
                <Link to="/">
                    <img className='logo' src={LOGO} alt='logo'/>
                </Link>

            </div>
            <div className='head-card'>
                <Link to="/main">Каршеринг</Link>
                <Link to="/contact">Контакты</Link>
                <a>О нас </a>
            </div>
        </header>
    );
}



export default Header;