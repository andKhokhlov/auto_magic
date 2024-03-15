import './Header.css'
import logo from "/src/ico/logo.png"
function Header(){
    return(
        <header className='head'>
            <a> Auto Magic</a>
            <img src={logo}/>
        </header>
    );
}


export default Header;