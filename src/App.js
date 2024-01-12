import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {


  const [stateCar, setStateCar] = useState(false)
const estado = () =>{
  // setStateCar(!stateCar)
  setStateCar(preValue => !preValue)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El carro esta: {stateCar ? "Encendido" : "Apagado"} </h1>
        <button onClick={estado}>Encender o apagar</button>
      </header>
    </div>
  );
}

export default App;
//Si no quieres usar div usar fragments que son = <> </> para encapsular varias cosas
//Usar export function 