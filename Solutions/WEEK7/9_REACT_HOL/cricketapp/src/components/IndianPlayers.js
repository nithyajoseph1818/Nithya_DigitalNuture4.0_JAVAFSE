import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ['Rohit', 'Rahul', 'Hardik', 'Shami', 'Pant'];
  const evenPlayers = ['Virat', 'Dhoni', 'Shikhar', 'Bumrah', 'Ashwin', 'Kohli'];

  const [oddCaptain, ...restOdd] = oddPlayers;
  const [evenCaptain, ...restEven] = evenPlayers;

  const T20players = ['Raina', 'Yuvraj', 'Jadeja'];
  const RanjiTrophyPlayers = ['Prithvi', 'Sarfaraz', 'Pujara'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p><strong>Captain:</strong> {oddCaptain}</p>
      <p><strong>Total Odd Players:</strong> {oddPlayers.length}</p>
      <ul>
        {restOdd.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <p><strong>Captain:</strong> {evenCaptain}</p>
      <p><strong>Total Even Players:</strong> {evenPlayers.length}</p>
      <ul>
        {restEven.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Indian Players (T20 + Ranji)</h2>
      <p><strong>Total Merged Players:</strong> {mergedPlayers.length}</p>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
