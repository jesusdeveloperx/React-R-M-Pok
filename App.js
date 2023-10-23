import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import './App.css';
import ContactPage from './pages/ContactPage/ContactPage';
import Menu from "./components/Menu";
import PokemonPage from "./pages/PokemonPage/PokemonPage";
import DigimonPage from "./pages/DigimonPage/DigimonPage";
import RickMortPage from "./pages/RickMortPage/RickMortPage";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
      <header><Menu/></header>

     
       

        <Routes>
        <Route path="/digimon" element={<DigimonPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/rickmort" element={<RickMortPage/>}/>
          <Route path="/pokemon" element={<PokemonPage/>}/>


        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
