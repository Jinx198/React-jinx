import { useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import chef from  "./images/chef.jpg"


function Header({name, year}){
  return(
    <header>
      <h1>{name}'s Restaurant</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items=[
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegtables"
];

const dishObjects= items.map((dish,i) => ({
  id: i,
  title: dish
}));

function Main({dishes, openStatus, onStatus}) {
  return(
    <>
    <div>
      <button onClick={()=> onStatus(true)}>
        I want to be open
        </button>
      <h2>
        Welcome to this beautiful Restaurant! {" "} 
        {openStatus ? "Open" :"Closed"}
        </h2>
    </div>

    <main>
      <img src={chef} 
      height="200" 
      alt="a image of a chef" />
    <ul>
      {dishes.map((dish)=>(
        <li key={dish.id} 
        style={{listStyleType: "none"}}> 
        {dish.title}</li>
      ))}
    </ul>
    </main>
    </>
  );
}

function App() {
  const[status, toggle]= useReducer(
    (status) => !status,
    true);

    useEffect(()=> {
      console.log(
        `The restaurant is ${status ? "open" : "closed"}.`
      );
    }, [status]);

  return (
  <div>
    <h1>
      The restaurant is currently {" "} 
      {status ? "Open" : "Closed"}.
    </h1>
    <button onClick ={toggle}>
      {status ? "Close" : "Open"} Restaurant
    </button>

    <Header name ="Jinx" year={new Date().getFullYear()} />
    <Main 
    dishes={dishObjects} 
    openStatus={status} 
    onStatus={toggle} />

  </div>
  );
}

export default App
