import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./map.css";

const MapComponent = () => {
    const apiKey = "ec692932-202f-4346-bd4b-71426a204eb8";

    const [selectedCar, setSelectedCar] = useState(null);

    const markers = [
        { coords: [54.940318, 41.399618], carModel: "Chery Tiggo 4" },
        { coords: [54.938079, 41.393178], carModel: "Renault Duster" },
        { coords: [54.938874, 41.395088], carModel: "Chery Tiggo 7 Pro" },
        { coords: [54.940813, 41.392393], carModel: "Haval Jolion" },
        { coords: [54.945286, 41.390938], carModel: "Chery Tiggo 4" },
        { coords: [54.944104, 41.383948], carModel: "Ford Focus 2" },
    ];

    const handleCarSelection = (carModel) => {
        setSelectedCar(carModel);
    };
    const createBalloonContent = (carModel) => `
        <strong>${carModel}</strong><br/>
        <p>Эта машина может стать вашей мечтой!</p>
        <button id="take-dream-button" style="padding: 5px 10px; background-color: green; color: white; border: none; cursor: pointer;">Забрать мечту</button>
    `;

    const handleBalloonOpen = (event, carModel) => {
        const balloon = event.get("target").balloon;
        if (balloon.isOpen()) {
            const button = document.getElementById("take-dream-button");
            if (button) {
                button.addEventListener("click", () =>
                    handleCarSelection(carModel)
                );
            }
        }
    };

    return (
        <>
            <div className="map-header">
                <h1>Закажи мечту прямо сейчас</h1>
            </div>
            <div className="map">
                <YMaps query={{ apikey: apiKey }}>
                    <Map
                        defaultState={{
                            center: [54.937288, 41.391368],
                            zoom: 14,
                        }}
                        width="100%"
                        height="100%"
                    >
                        {markers.map((marker, index) => (
                            <Placemark
                                key={index}
                                geometry={marker.coords}
                                options={{
                                    iconLayout: "default#image",
                                    iconImageHref:
                                        "https://img.icons8.com/color/48/000000/car.png",
                                    iconImageSize: [30, 30],
                                    iconImageOffset: [-15, -15],
                                }}
                                properties={{
                                    balloonContent: createBalloonContent(
                                        marker.carModel
                                    ),
                                }}
                                modules={["geoObject.addon.balloon"]}
                                onBalloonOpen={(e) =>
                                    handleBalloonOpen(e, marker.carModel)
                                }
                            />
                        ))}
                    </Map>
                </YMaps>
            </div>

            
            {selectedCar && (
                <div className="selected-car">
                    <h2>Машина "{selectedCar}" теперь ваша!</h2>
                </div>
            )}
        </>
    );
};

export default MapComponent;
