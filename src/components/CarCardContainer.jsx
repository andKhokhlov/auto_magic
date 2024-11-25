import CarsData from "../data/CarsData";
import GeelyCoolrayf from "../data/carimg/geely-coolray-white-3-4.png";
import CheryTiggo7Pro from "../data/carimg/chery-tiggo-pro-7-white-3-4.png";
import HavalJolion from "../data/carimg/haval-jolion-white-3-4.png";
import CheryTiggo4 from "../data/carimg/chery-tiggo-4-white-3-4.png";
import GeelyCoolray from "../data/carimg/geely-coolray-white-3-4.png";
import GeelyAtlasPro from "../data/carimg/geely-atlasPro-white-3-4.png";
import RenaultDuster from "../data/carimg/Renault_Duster-mow-3-4.png";
import VolkswagenPolo from "../data/carimg/volkswagen-polo-6-mow.png";
import NissanQashqai from "../data/carimg/nissan-qashqai-new-white.png";
import ŠkodaRapid from "../data/carimg/Rapid_2_3-4_msk.png";

function CarCardContainer({ imageCar, title }) {
    const carData = [
        { imageCar: GeelyCoolrayf, title: "Geely Coolray Flagship" },
        { imageCar: CheryTiggo7Pro, title: "Chery Tiggo 7 Pro" },
        { imageCar: HavalJolion, title: "Haval Jolion" },
        { imageCar: CheryTiggo4, title: "Chery Tiggo 4" },
        { imageCar: GeelyCoolray, title: "Geely Coolray" },
        { imageCar: GeelyAtlasPro, title: "Geely Atlas Pro" },
        { imageCar: RenaultDuster, title: "Renault Duster" },
        { imageCar: VolkswagenPolo, title: "Volkswagen Polo 6" },
        { imageCar: NissanQashqai, title: "Nissan Qashqai" },
        { imageCar: ŠkodaRapid, title: "Škoda Rapid II" },
    ];

    return (
        <div className="Cars_section_models">
            {carData.map((car, index) => (
                <CarsData
                    key={car.title}
                    title={car.title}
                    imageCar={car.imageCar}
                />
            ))}
        </div>
    );
}

export default CarCardContainer;
