import React from 'react';

const OfficeList = () => {
  const offices = [
    {
      name: 'Space Hub',
      rent: 55000,
      address: 'MG Road, Bengaluru',
      image: process.env.PUBLIC_URL + '/img1.jpg',
    },
    {
      name: 'Smart Desk',
      rent: 75000,
      address: 'Hinjewadi, Pune',
      image: process.env.PUBLIC_URL + '/img2.jpg',
    },
    {
      name: 'CoWork Central',
      rent: 60000,
      address: 'Cyber City, Gurgaon',
      image: process.env.PUBLIC_URL + '/img3.jpg',
    },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Available Office Spaces</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {offices.map((office, index) => {
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold',
          };

          return (
            <div
              key={index}
              style={{
                width: '300px',
                border: '1px solid gray',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                textAlign: 'left',
              }}
            >
              <img
                src={office.image}
                alt={office.name}
                width="100%"
                height="200"
                style={{ borderRadius: '5px', objectFit: 'cover' }}
              />
              <h3>{office.name}</h3>
              <p>
                <strong>Address:</strong> {office.address}
              </p>
              <p>
                <strong>Rent:</strong>{' '}
                <span style={rentStyle}>₹{office.rent}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfficeList;
