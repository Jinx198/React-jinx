import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import chef from  "./images/chef.jpg"


function Header({name, year}){
  return(
    <header>
      <h1>{name}'s ui</h1>
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

function Main({dishes, openStatus}) {
  return(
    <>
    <div>
      <h2>Welcome to this beautiful Restaurant! {" "} 
        {openStatus ? "Open" :"Closed"}</h2>
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
  const [status,setStatus]=useState(true);
  console.log(status);

  return (
  <div>
    <h1>The restaurant is currently {" "} 
      {status ? "Open" : "Closed"}.
    </h1>
    <button onClick ={()=> setStatus(!status)}>
      {status ? "Close" : "Open"} Restaurant

    </button>
    <Header name ="Jinx" 
    year={new Date().getFullYear()} />
    <Main dishes={dishObjects} 
    openStatus={status} />
  <main>
    <h2>Welcome to my react page</h2>
  </main>
  </div>
  );
}

export default App
