import './Pokemon.css';
import Pokestat from './Pokestat';


//Take back data 
function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

// Take back data 
const images = importAll(require.context('../img'));
const Pokemon = ({id,name}) => {
//Extension pics
    let pics;

    if (id.toString().length == 1) {
        pics = '00'+id.toString()+'.png';
    }else if (id.toString().length == 2) {
        pics = '0'+id.toString()+'.png';  

    }else if (id.toString().length == 3) {
        pics = id.toString()+'.png'
    }
    

    return (
            <main className='t1'>
                <div className='t2'>
                        <h2>{name['french']}</h2>
                        <img width="auto"  src={images[pics]}/>
                        <br></br>
                        <h2>{<Pokestat id={id} />}</h2>
                </div>        
            </main>     
    )
}

export default Pokemon