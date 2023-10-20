import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import './App.css';
import ContactPage from './pages/ContactPage/ContactPage';
import Menu from "./components/Menu";
import Pokemon from "./pages/Pokemon/Pokemon";
import CharacterPage from "./pages/CharacterPage/CharacterPage";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
      <header><Menu/></header>

     
       

        <Routes>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/character" element={<CharacterPage/>}/>
          <Route path="/pokemon" element={<Pokemon/>}/>


        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
