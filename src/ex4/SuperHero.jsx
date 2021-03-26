import React from 'react';

const SuperHero = ({ superhero }) => {
  return (
    <p>{superhero.name} with an intelligence of {superhero.powerstats.intelligence}</p>
  );
};

export default SuperHero;