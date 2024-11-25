import React, { useState, useEffect } from "react";
import step1 from "../../data/phone/step1_3.png";
import step2 from "../../data/phone/step2_3.png";
import step3 from "../../data/phone/step3_3.png";
import "../../App.css";
const ImageSlider = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [step1, step2, step3];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            <img
                className="phone-card"
                src={images[imageIndex]}
                alt="slide"
                style={{
                    width: "100%",
                    marginTop: "16px",
                    height: "513px",
                    backgroundColor: "transparent",
                }}
            />
        </div>
    );
};

export default ImageSlider;
