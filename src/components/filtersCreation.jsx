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
  if (!nameFilter || characters.length === 0) return; // exist?

  nameFilter.innerHTML = ""; // clean content
  characters.forEach((person) => {
    const option = document.createElement("option");
    option.innerHTML = `<option  name="name" value="${person.name}"> ${person.name}`;
    nameFilter.appendChild(option);
  });

  nameFilter.addEventListener("change", (e) => {
    selectedName = e.target.value;
    filterResults();
  });


  // Status filter
  let selectedStatus = ""; 
  const statusFilter = document.getElementById("statusFilter");
  if (!statusFilter || characters.length === 0) return; // exist?

  statusFilter.innerHTML = ""; // clean content
  characters.forEach((person) => {
    const option = document.createElement("option");
    option.innerHTML = `<option  name="name" value="${person.status}"> ${person.status}`;
    statusFilter.appendChild(option);
  });

  statusFilter.addEventListener("change", (e) => {
    selectedStatus = e.target.value;
    filterResults();
  });


  



  // Filtrar los datos
  function filterResults() {
    const filteredData = characters.filter((person) => {
      const matchesName = selectedName ? person.name === selectedName : true;
      const matchesStatus = selectedStatus ? person.status === selectedStatus : true;
      console.log("filter is working!");
      return matchesName && matchesStatus;
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
      const div = document.createElement("div");
      const img = document.createElement("img");

      img.src = person.image;
      div.textContent = `${person.name} ${person.species}  ${person.gender}`;
      div.className = "cardCharacter";
      div.appendChild(img);
      resultList.appendChild(div);
    });
  }
}

export default Filters;
