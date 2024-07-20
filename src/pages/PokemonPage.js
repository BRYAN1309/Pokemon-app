import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../api';
import '../pokemonpage.css'; 

const PokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonById(id);
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <div className="loading">Loading...</div>;

  return (
    <div className="pokemon-page">
      <header className="pokemon-header">
        <h1 className="pokemon-name">{pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-image"
        />
      </header>
      <section className="pokemon-details">
        <h2>Abilities</h2>
        <ul className="ability-list">
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name} className="ability-item">
              {ability.ability.name}
            </li>
          ))}
        </ul>
        <h2>Stats</h2>
        <ul className="stats-list">
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name} className="stat-item">
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PokemonPage;
