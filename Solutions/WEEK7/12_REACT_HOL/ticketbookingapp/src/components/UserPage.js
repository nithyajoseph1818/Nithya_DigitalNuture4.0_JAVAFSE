import React, { useState } from 'react';

function UserPage() {
  const [flightNo, setFlightNo] = useState('');
  const [passengerName, setPassengerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (flightNo && passengerName) {
      alert(`Ticket Booked!\nFlight: ${flightNo}\nPassenger: ${passengerName}`);
      setFlightNo('');
      setPassengerName('');
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <h2>Book Your Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Flight No:</label>
          <input
            type="text"
            value={flightNo}
            onChange={(e) => setFlightNo(e.target.value)}
          />
        </div>
        <div>
          <label>Passenger Name:</label>
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default UserPage;
