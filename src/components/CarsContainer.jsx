import icon from "../images/free-icon-car-wash-2211392.png";
import "./CarsContainer.css";
import CarCardContainer from "./CarCardContainer";
import CarCardContainer3 from "./CarCardContainer3";
import CarCardContainer2 from "./CarCardContainer2";
import CarsData from "../data/CarsData";
import Jeep from "../data/carimg/jeep-sahara-orange-3-4.png";
import Nissan from "../data/carimg/nissan-leaf-new-white-3-4.png";
import React from "react";

function CarsContainer() {
    return (
        <div className="Cars_container">
            <div className="Section_header">
                <img className="SectionIcon" src={icon}></img>
                <h2>Вот машины в вашем городе. В других — другие.</h2>
            </div>
            <div className="Cars_container_content">
                <div className="Cars_section_header_mobile">
                    <div
                        className="Cars_section_header_title_mobile"
                        style={{ color: "rgb(19,136,8)" }}
                    >
                        На каждый день
                    </div>
                    <div className="Cars_section_header_subtitle_mobile">
                        Нужны 21 год жизни и 2 года стажа
                    </div>
                </div>

                <CarCardContainer />
            </div>
            <div className="Cars_container_content">
                <div className="Cars_section_header_mobile">
                    <div
                        className="Cars_section_header_title_mobile"
                        style={{ color: "rgb(19,136,8)" }}
                    >
                        Праздник
                    </div>
                    <div className="Cars_section_header_subtitle_mobile">
                        Нужны 26 лет жизни и 6 стажа, 30 км пробега и рейтинг 42
                    </div>
                </div>

                <CarCardContainer2 />
            </div>
            <div className="Cars_container_content">
                <div className="Cars_section_header_mobile">
                    <div
                        className="Cars_section_header_title_mobile"
                        style={{ color: "rgb(19,136,8)" }}
                    >
                        Жара
                    </div>
                    <div className="Cars_section_header_subtitle_mobile">
                        Нужны 26 лет жизни и 6 стажа, 30 км пробега и рейтинг 42
                    </div>
                </div>

                <div className="Cars_section_models">
                    <div className="Car_card_container">
                        <div
                            className="Car_card"
                            style={{ backgroundColor: "rgb(237, 118, 14)" }}
                        >
                            <img src={Jeep} className="Car_card_icon"></img>
                            <div
                                className="Car_card_title"
                                style={{ color: "rgb(255, 255, 255)" }}
                            >
                                Jeep Sahara
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Cars_container_content">
                <div className="Cars_section_header_mobile">
                    <div
                        className="Cars_section_header_title_mobile"
                        style={{ color: "rgb(19,136,8)" }}
                    >
                        Молния
                    </div>
                    <div className="Cars_section_header_subtitle_mobile">
                        Нужны 26 лет жизни и 6 стажа, 30 км пробега и рейтинг 42
                    </div>
                </div>

                <div className="Cars_section_models">
                    <div className="Car_card_container">
                        <div
                            className="Car_card"
                            style={{ backgroundColor: "rgb(106, 90, 205)" }}
                        >
                            <img src={Nissan} className="Car_card_icon"></img>
                            <div
                                className="Car_card_title"
                                style={{ color: "rgb(255, 255, 255)" }}
                            >
                                Nissan Leaf
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Cars_container_content">
                <div className="Cars_section_header_mobile">
                    <div
                        className="Cars_section_header_title_mobile"
                        style={{ color: "rgb(19,136,8)" }}
                    >
                        Груз и шаттл
                    </div>
                    <div className="Cars_section_header_subtitle_mobile">
                        Нужны 21 год жизни и 2 года стажа
                    </div>
                </div>

                <CarCardContainer3 />
            </div>
        </div>
    );
}

export default CarsContainer;
