import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Rohit', score: 85 },
    { name: 'Virat', score: 95 },
    { name: 'Rahul', score: 65 },
    { name: 'Dhoni', score: 78 },
    { name: 'Shikhar', score: 62 },
    { name: 'Hardik', score: 88 },
    { name: 'Bumrah', score: 45 },
    { name: 'Shami', score: 52 },
    { name: 'Ashwin', score: 91 },
    { name: 'Kohli', score: 59 },
    { name: 'Pant', score: 99 },
  ];

  const lowScorers = players.filter(player => player.score < 70);
  const highScorers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>Players Who Scored Less Than 70</h2>
      <p><strong>Total Players:</strong> {players.length}</p>
      <p><strong>Scored &lt; 70:</strong> {lowScorers.length}</p>
      <p><strong>Scored ≥ 70:</strong> {highScorers.length}</p>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
