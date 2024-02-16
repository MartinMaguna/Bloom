import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/nosotros';
import Contacto from './components/contacto';


function App() {
  return (
    <div>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
          </Routes>
          
        </BrowserRouter>
    </div>
  );
}



export default App;
