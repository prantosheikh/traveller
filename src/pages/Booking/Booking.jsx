import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <h2>Booking</h2>
        </div>
    );
};

export default Booking;