import { useState, useEffect } from "react";

function Filters() {
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) =>
        console.error("Error al obtener los personajes:", error)
      );
  }, []);


  // Name filter
  let selectedName = ""; 
  const nameFilter = document.getElementById("nameFilter");
  
  if (!nameFilter || characters.length === 0) return; // Exist?

  nameFilter.addEventListener("input", (e) => {
    selectedName = e.target.value.toLowerCase().trim(); 
    filterResults();
  });


  // Status filter
  let selectedStatus = ""; 
  const statusFilter = document.getElementById("statusFilter");

  if (!statusFilter || characters.length === 0) return; // exist?
  statusFilter.innerHTML = ""; // clean content

   const uniqueStatuses = new Set(); // filtered not repeat set => 0: "Alive" 1: "unknown" 2: "Dead"
   characters.forEach(person => uniqueStatuses.add(person.status)); // create filtered array => Set(3) {'Alive', 'unknown', 'Dead'}
   uniqueStatuses.forEach(status => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    statusFilter.appendChild(option);
  });

  statusFilter.addEventListener("change", (e) => {
    selectedStatus = e.target.value;
    filterResults();
  });


    // Specie filter
    let selectedSpecie = ""; 
    const specieFilter = document.getElementById("specieFilter");
    if (!specieFilter || characters.length === 0) return; // exist?
  
    specieFilter.innerHTML = ""; // clean content

    const uniqueSpecies = new Set(); // filtered not repeat set => 0: "Alive" 1: "unknown" 2: "Dead"
    characters.forEach(person => uniqueSpecies.add(person.species)); // create filtered array => Set(3) {'Alive', 'unknown', 'Dead'}
    uniqueSpecies.forEach(specie => {
     const option = document.createElement("option");
     option.value = specie;
     option.textContent = specie;
     specieFilter.appendChild(option);
   });
  
    specieFilter.addEventListener("change", (e) => {
      selectedSpecie = e.target.value;
      filterResults();
    });




  // Filtrar los datos
  function filterResults() {
    const filteredData = characters.filter((person) => {
      const matchesName = selectedName ? person.name.toLowerCase().includes(selectedName) : true;
      const matchesStatus = selectedStatus ? person.status === selectedStatus : true;
      const matchesSpecie = selectedSpecie ? person.species === selectedSpecie : true;
      console.log("filter is working!");
      return matchesName && matchesStatus && matchesSpecie;
    });

    renderResults(filteredData);
  }

  const resultList = document.getElementById("resultList");

  // Renderizar la lista filtrada
  function renderResults(data) {
    resultList.innerHTML = "";
    if (data.length === 0) {
      resultList.innerHTML = "<li>No characters</li>";
      return;
    }

    data.forEach((person) => {





const flipcard = document.createElement("div");
const flipcardinner = document.createElement("div");
const flipcardfront = document.createElement("div");
const flipcardback = document.createElement("div");
const Avatar = document.createElement("img");
const textDetail = document.createElement("div");
const buttonMore = document.createElement("button")

flipcard.className = "flip-card";
flipcardinner.className = "flip-card-inner";
flipcardfront.className = "flip-card-front";
flipcardback.className = "flip-card-back";
Avatar.src = person.image;
textDetail.textContent = `${person.name} , ${person.species} , ${person.gender} , ${person.status}`;
textDetail.className = "textDetail";
buttonMore.className = "buttonMore";
buttonMore.textContent = "See More";



resultList.appendChild(flipcard);
flipcard.appendChild(flipcardinner);
flipcardinner.appendChild(flipcardfront);
flipcardfront.appendChild(Avatar);
flipcardinner.appendChild(flipcardback);
flipcardback.appendChild(textDetail);
flipcardback.appendChild(buttonMore);



    });
  }
}

export default Filters;
