import { useState, useEffect  } from "react";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Filters from "./components/filtersCreation";
import CharacterList from "./components/CharacterList";
import ShowModal from "./components/modal";





function App() {
  const [characters, setCharacters] = useState([]);
  const [showCharacters, setShowCharacters] = useState(false);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .catch(error => console.error("Error al obtener los personajes:", error));
        console.log ("I did fetch")
  }, []);

  const handleClick = () => {
    if (!showCharacters) {
      setShowCharacters(true);
    }
  };

 

  return (
    <>
      <ShowModal />
      <Header />

      <Filters />


      <div className="container">
      
        <div className="row">
          
          <button onClick={handleClick}>Show Characters </button>

          <div className="container-cards" id="container-cards">
            {showCharacters && <CharacterList />}{" "}
          </div>
        </div> 

      </div>





    </>
  );
}

export default App;
