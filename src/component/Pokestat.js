import './Pokestat.css';
import { getById } from '../Fonction';
import {useState, useEffect} from 'react';


const Pokestat = ({id}) => {
 
//tack back stat pokemon 
    let [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getById(id).then((data) => {
            setPokemon(data);
        }); 
        }, []);

        return (
           <div className='container'>
               <h4>Pokémon numéro :  </h4>
                <div  key={id}>
                   <p className='number'> {pokemon.id}</p>
                 </div> 
           </div>
        );
}

export default Pokestat