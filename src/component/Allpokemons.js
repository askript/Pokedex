import Pokemon from './Pokemon';
import { getPokemons } from '../Fonction';
import {useState, useEffect} from 'react';


//Take back data
const Allpokemons = () => {
    let [Allpokemons, setAllpokemons] = useState([])

    useEffect(() => {
        getPokemons().then((data) => {
          setAllpokemons(data);
        });
      }, []);

//Page        
    return (
        <div>
            {  Allpokemons.map((p)=> (
                <div  key={p.id} >
                    <Pokemon {...p} />
                </div>     
            )) 
            } 
        </div>
    )  
}

export default Allpokemons