import CarsData from "../data/CarsData";
import BMW520I from "../data/carimg/bmw-black-3-4-clean.png";
import MercedesE200 from "../data/carimg/mercedes-e200-black-3-4-clean.png";
import AudiA6 from "../data/carimg/audi-a6-clean-3-4.png";
import MercedesC180 from "../data/carimg/mercedes-C180-black-3-4-clean-2.png";

function CarCardContainer2({ imageCar, title }) {
    const carData = [
        { imageCar: BMW520I, title: "BMW 520i" },
        { imageCar: MercedesE200, title: "Mercedes E200" },
        { imageCar: AudiA6, title: "Audi A6" },
        { imageCar: MercedesC180, title: "Mercedes C180" },
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

export default CarCardContainer2;
