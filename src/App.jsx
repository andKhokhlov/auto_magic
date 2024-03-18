
import './App.css';
import Header from "./header/Header";
import phone from "./images/phone.png"
function App() {
  return (

    <div className="App">
      <div className="card_container">
          <div className="card-click">
            <h1>Свобода — когда своей машины нет. А каршеринг есть.</h1>
              <button>Взять мечту</button>
          </div>
        <div className="card_phone">
          <img className="phone-card" src={phone} alt={phone}/>
      </div>
      </div>
    </div>
  );
}

export default App;
