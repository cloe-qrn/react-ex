import React, { useEffect, useState } from 'react';
import ListSuperHeroes from './ListSuperHeroes';

export const Exercise2View = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => {
        setSuperheroes(heroes);
      });
  }, []);

  return (
    <main>
      <ListSuperHeroes superheroes={superheroes} />
    </main>
  );
};
