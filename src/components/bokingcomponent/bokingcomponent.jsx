import React, { useState, useEffect } from "react";
import "./bokingcomponent.css";

const carsList = ["Toyota", "Honda", "BMW", "Audi"]; // Пример списка машин

const BookingComponent = () => {
    const [bookings, setBookings] = useState([]);

    // Загрузка состояния из localStorage при первой загрузке компонента
    useEffect(() => {
        const savedBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];
        setBookings(savedBookings);
    }, []);

    // Сохранение состояния bookings в localStorage при его изменении
    useEffect(() => {
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }, [bookings]);

    const addBooking = (newBooking) => {
        setBookings([...bookings, newBooking]);
    };

    return (
        <div className="booking-container">
            <h2>Booking System</h2>
            <BookingForm addBooking={addBooking} />
            <BookingList bookings={bookings} />
        </div>
    );
};

const BookingForm = ({ addBooking }) => {
    const [name, setName] = useState("");
    const [car, setCar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "" || car.trim() === "") {
            alert("Please fill in both name and select a car.");
            return;
        }
        addBooking({ name, car });
        setName("");
        setCar("");
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
            />
            <select
                value={car}
                onChange={(e) => setCar(e.target.value)}
                placeholder="Select car"
            >
                <option value="">Select a car</option>
                {carsList.map((carOption, index) => (
                    <option key={index} value={carOption}>
                        {carOption}
                    </option>
                ))}
            </select>
            <button type="submit">Book</button>
        </form>
    );
};

const BookingList = ({ bookings }) => (
    <div className="booking-list">
        <ul>
            {bookings.map((booking, index) => (
                <li key={index}>
                    {booking.name} Забронировал {booking.car}
                </li>
            ))}
        </ul>
    </div>
);

export default BookingComponent;
