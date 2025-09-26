import './App.css'
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
console.log(animalObjects)

function Main({animals}) {
  return(
    <>
      <div>
        <h2>Jarvis write something here</h2>
      </div>
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
  return (
    <div>
      <Header name="Callum"/>
      <Main animals={animalObjects}/>
    </div>
  );
}

export default App
