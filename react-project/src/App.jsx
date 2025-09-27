import './App.css'
import { useState, useReducer, useEffect } from 'react';
import thumbsUp from './images/thumbs_up.jpg'

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s AWESOME NEW WEBPAGE</h1>
    </header>
  );
}

const items = [
  "The Mighty Duck-Billed Platapus",
  "A Lonesome Highland Cow",
  "A Very Strange Looking Snake",
  "A Withered Mongoose"
];

const animalObjects = items.map( (animal, i) =>  ({
  id: i,
  name: animal
}))


function Main({animals, state, onStatus}) {
  return(
    <>
      <div>
        <h2>Jarvis write something here{" "} 
        {state ? "WAAAAAAGH" : "Blegh"}
      </h2>
      </div>
      <button onClick={() => onStatus(true)}>
        How you feelin?
      </button>
      <main>
        <img 
        src={thumbsUp} 
        height={200} 
        alt="big happy boy, thumbs up"
        />
        <ul>
          {animals.map((animal) => (
            <li key={animal.id} style={{ listStyleType : "none"}}>{animal.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  //Used for handling states
  //const [status, setStatus] = useState(true);

  //Simpler way of handling states
  const [status, toggle] = useReducer( 
    (status) => !status,
    true 
  );

  //Used for handling side effects
  useEffect( () => {
    console.log(`The Gate is ${status ? "open":"closed"}`);
  }, [status]);

  return (
    <div>
      <h1>THE GATES ARE {status ? "OPEN":"CLOSED"}!</h1>
      <button onClick={toggle}>
        {status ? "Close" : "Open"} gates
      </button>
      <Header name="Callum"/>
      <Main animals={animalObjects} 
      state={status} 
      onStatus ={toggle}/>
    </div>
  );
}

export default App
