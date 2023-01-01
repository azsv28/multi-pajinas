import './App.css';
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './pages/Header'
import Inicio from './pages/Inicio';
import Calculadora from './pages/calculadora/indexcal';
import Tareas from './pages/notas/notas';
import Mycalendario from './pages/calendario/calendario';
import TareaT from './pages/Tarea/Tarea';



function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Calculadora' element={<Calculadora/>}/>
        <Route path='/notas' element={<Tareas/>}/>
        <Route path='/calendario' element={<Mycalendario/>}/> 
        <Route path='/TareaT' element={<TareaT/>}/>
      </Routes>
    </div>

  );
}

export default App;