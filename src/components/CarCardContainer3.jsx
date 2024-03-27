import CarsData from "../data/CarsData";
import Transporter from '../data/carimg/ford-transit-angle.png'
import Expert from '../data/carimg/peugeot_expert-new.png'
import Transit from '../data/carimg/ford-transit-angle.png'
import Kombi from '../data/carimg/volkswagen-kombi-angle-2.png'
import Jumpy from '../data/carimg/citroen-jumpy-new.png'
import Caravelle from '../data/carimg/volkswagen-caravelle-angle-04-06.png'

function CarCardContainer3({imageCar, title}) {

    const carData = [
        { imageCar: Transporter, title: 'Volkswagen Transporter'},
        { imageCar: Expert, title: 'Peugeot Expert'},
        { imageCar: Transit, title: 'Ford Transit'},
        { imageCar: Kombi, title: 'Volkswagen Kombi'},
        { imageCar: Jumpy, title: 'Citroën Jumpy'},
        { imageCar: Caravelle, title: 'Citroën Jumpy'}
    ];

    return(

        <div className='Cars_section_models'>
            {carData.map((car, index) => (
                <CarsData key={car.title} title={car.title} imageCar = {car.imageCar} />
            ))}
        </div>

    )
}

export default CarCardContainer3;