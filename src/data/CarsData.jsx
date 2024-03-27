import './CarsData.css'
import React from 'react';

function CarsData({title, imageCar}) {



    return (
     
        <div className="Car_card_container">
            <div className="Car_card">
                <img src={imageCar} className="Car_card_icon"></img>
                <div className="Car_card_title" style={{color: '(0,0,0)'}}>{title}</div>
            </div>
            <div className='Car_card_shadow'></div>
        </div>
      
    );
}

export default CarsData;