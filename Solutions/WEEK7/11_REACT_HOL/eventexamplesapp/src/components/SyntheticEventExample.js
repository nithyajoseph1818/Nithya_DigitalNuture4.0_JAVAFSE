import React from 'react';

const SyntheticEventExample = () => {
  const handleClick = (e) => {
    alert("I was clicked");
    console.log(e); // Synthetic event object
  };

  return (
    <div>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
};

export default SyntheticEventExample;
