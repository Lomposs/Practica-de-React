import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {

  const User = {
    nombre: "User",
    edad: 23,
    color: "Azul"
  }

  const SaludarFn = (name, edad, color) => {
    console.log(`Hola ${name} que tal estas? Años: ${edad} y color favorito: ${color}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar UserInfo = {User} SaludarFn ={SaludarFn} />

      </header>
    </div>
  );
}

export default App;
//Si no quieres usar div usar fragments que son = <> </> para encapsular varias cosas
//Usar export function 