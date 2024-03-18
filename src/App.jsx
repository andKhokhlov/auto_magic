import './App.css';
import phone from "./images/phone.png"

function App() {
  return (

    <div className="MainScreenContainer">
      <div className="PromoContainer">
          <div className="PromoContent">
              <div className="Promo_Item_Left_Section">
                <div className="Promo_Item_Left_Section_Title">
                <h1>Свобода — когда своей машины нет. А каршеринг есть.</h1>
                </div>
                <button className="RegisterButton">
                  <div className='RegisterButtonTitle'>
                  Зарегистрироваться в Драйве
                  </div>
                  </button>
                
            </div>
            <div className="card_phone">
                  <img className="phone-card" src={phone} alt={phone}/>
                </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
