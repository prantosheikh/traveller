import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";

const Booking = () => {
  const { id } = useParams();
  console.log(id);

  const [trips, setTrips] = useState([]);
  console.log(trips);
  useEffect(() => {
    fetch(`http://localhost:3000/featured-details/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, []);

  return (
    <Container>
      <h2>Booking</h2>
    </Container>
  );
};

export default Booking;
