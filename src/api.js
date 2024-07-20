// src/api.js
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const getAllPokemon = async () => {
  const response = await axios.get(`${API_URL}/pokemon?limit=100`);
  return response.data.results;
};

export const getPokemonById = async (id) => {
  const response = await axios.get(`${API_URL}/pokemon/${id}`);
  return response.data;
};

export const searchPokemon = async (query) => {
  const response = await axios.get(`${API_URL}/pokemon/${query}`);
  return response.data;
};

export const getPokemon = async () => {
    const options = {
      method: 'GET',
      url: 'https://pokedex2.p.rapidapi.com/pokedex/uk/pikachu',
      headers: {
        'x-rapidapi-key': '4c5674077amshf1739274b033188p12afe3jsnc378ef526d11',
        'x-rapidapi-host': 'pokedex2.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

