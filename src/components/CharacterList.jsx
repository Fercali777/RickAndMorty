import { useState, useEffect } from "react";

function CharacterList() {
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error("Error al obtener los personajes:", error));
            console.log ("I did fetch")
      }, []);


    const [characters, setCharacters] = useState([]);




    return (
        <div className="container">
            
            <h1>The Rickest Gallery in the Multiverse!</h1>
            <div className="container-cards" id="container-cards">
                {characters.map(character => (
                    
                    <div className=" cardCharacter" key={character.id}>
                        <img src={character.image} alt={character.name}></img>
                        {character.name}, { }
                        {character.species}, { }
                        {character.gender}
                    </div>


                ))}
            </div>
        </div>
    );
}


export default CharacterList;