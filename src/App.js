
import './App.css';
import {Mensaje2} from './Mensaje2.js';
import { Mensaje } from './Mensaje2.js';


const Descripcion = () => {
  return <p>Esta es una descripción</p>;
};
   
const App = () => {
  
  return (
    
    <div className="App">
      <Mensaje color ='blue' message= 'Hola gente'/>
      <Mensaje2 color ='red' message= 'estamos en un curso' />
      <Descripcion />
    </div> 
  )
}

export default App;
