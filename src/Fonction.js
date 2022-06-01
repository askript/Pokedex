const url = 'http://localhost:3000/pokemons';

export const getPokemons = () => {
  return fetch(url).then((response) => response.json());
};


export const getById = (id) => {
    return fetch(`${url}/${id}`).then((response) =>
      response.json()
    );
  };

