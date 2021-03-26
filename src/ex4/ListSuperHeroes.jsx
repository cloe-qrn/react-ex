import React from 'react';
import SuperHero from './SuperHero';

const ListSuperHeroes = ({ superheroes }) => {
  // const superheroesItems = superheroes.map((superhero) => (
  //   <li><SuperHero key={superhero.id} superhero={superhero} /></li>
  // ));
  const superheroesItems = superheroes.filter(
    (superhero) => superhero.powerstats.intelligence >= 50
  )
  .map((superhero) => (
    <li><SuperHero key={superhero.id} superhero={superhero} /></li>
  ));
  return (
    <ul>
      {superheroesItems}
    </ul>
  );
};

export default ListSuperHeroes;
