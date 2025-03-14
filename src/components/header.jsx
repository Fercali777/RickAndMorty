import { useState } from "react";

function Header() {
  function renderNameFilters() {
    baseUsers.forEach((person) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="name" value="${person.name}"> ${person.name}`;
      nameFilter.appendChild(label);
    });

    nameFilter.addEventListener("change", (e) => {
      selectedName = e.target.value;
      // filterResults(); // this update de resoults list
    });
  }

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/img/logo.png" />
        </div>

        <div className="row">
          <div className="col-md-4  text-white p-3">
            <h2>Name</h2>
            <select id="nameFilter"></select>
          </div>

          <div className="col-md-4  text-white p-3">
            <h2>Status</h2>
            <select id="statusFilter"></select>
          </div>

          <div className="col-md-4  text-white p-3">
            <h2>Specie</h2>
            <div id="specieFilter"></div>
          </div>
        </div>
      </div>

      <div className="container">
        
        <div id="resultList"></div>
      </div>
    </>
  );
}

export default Header;
