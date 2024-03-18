import './Header.css'
import LOGO from '../logo.svg'

import {Link} from "react-router-dom";
function Header(){
    return(
        <header className='head'>
            <div className='logotip'>
                <img className='logo' src={LOGO} alt='logo'/>
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