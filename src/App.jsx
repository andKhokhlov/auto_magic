// App.jsx
import "./App.css";
import phone from "./images/phone.png";
import magickstick from "./images/magicwand.png";
import React, { useState } from "react";
import CasesInfoWrap from "./components/CasesInfoWrap";
import CarsContainer from "./components/CarsContainer";
import SectionContainer from "./components/SectionContainer";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import BookingComponent from "./components/bokingcomponent/bokingcomponent";
import ScrollButton from "./components/buttonScroll/ButtonScroll";
import MapComponent from "./components/maps/map";

function App() {
    const [selectedCase, setSelectedCase] = useState("На работу");
    const handleCaseSelection = (caseName) => {
        setSelectedCase(caseName);
    };

    return (
        <div className="MainScreenContainer">
            <div className="PromoContainer">
                <div className="PromoContent">
                    <div className="Promo_Item_Left_Section">
                        <div className="Promo_Item_Left_Section_Title">
                            <h1>
                                {" "}
                                Свобода — когда своей машины нет. А каршеринг
                                есть.
                            </h1>
                        </div>
                        <ScrollButton offset={700} duration={1000}>
                            Прокрутить в низ
                        </ScrollButton>
                    </div>
                    <div className="card_phone">
                        <div className="phone-card">
                            <ImageSlider />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Cases_Container">
                <div className="Section_header">
                    <img
                        className="SectionIcon"
                        src={magickstick}
                        alt={magickstick}
                    ></img>
                    <h2> Наши машины для вашей жизни</h2>
                    <h3>
                        Понажимайте, и увидите, какие автомобили по каким
                        тарифам можно взять
                    </h3>
                </div>
                <div className="Cases_Wrap">
                    <button
                        className={`Case_button ${
                            selectedCase === "На работу" ? "SelectedButton" : ""
                        }`}
                        onClick={() => handleCaseSelection("На работу")}
                    >
                        На работу
                    </button>
                    <button
                        className={`Case_button ${
                            selectedCase === "В аэропорт"
                                ? "SelectedButton"
                                : ""
                        }`}
                        onClick={() => handleCaseSelection("В аэропорт")}
                    >
                        В аэропорт
                    </button>
                    <button
                        className={`Case_button ${
                            selectedCase === "Переезд" ? "SelectedButton" : ""
                        }`}
                        onClick={() => handleCaseSelection("Переезд")}
                    >
                        Переезд
                    </button>
                    <button
                        className={`Case_button ${
                            selectedCase === "С детьми на дачу"
                                ? "SelectedButton"
                                : ""
                        }`}
                        onClick={() => handleCaseSelection("С детьми на дачу")}
                    >
                        С детьми на дачу
                    </button>
                    <button
                        className={`Case_button ${
                            selectedCase === "Покататься"
                                ? "SelectedButton"
                                : ""
                        }`}
                        onClick={() => handleCaseSelection("Покататься")}
                    >
                        Покататься
                    </button>
                    <button
                        className={`Case_button ${
                            selectedCase === "На свидание"
                                ? "SelectedButton"
                                : ""
                        }`}
                        onClick={() => handleCaseSelection("На свидание")}
                    >
                        На свидание
                    </button>
                </div>
                <CasesInfoWrap selectedCase={selectedCase} />
            </div>
            <CarsContainer />
            {/* <BookingComponent></BookingComponent> */}
            <MapComponent></MapComponent>
        </div>
    );
}

export default App;
