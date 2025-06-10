import { useState, useEffect } from "react";
import "../styles/App.scss";
import List from "./contacts/List";

function App() {
  const [contacts, setContacts] = useState([]);

  const [filters, setFilters] = useState({
    name: "",
    house: "",
  });

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  const handleInputFilterName = (ev) => {
    setFilters({ ...filters, name: ev.target.value });
  };

  const handleInputFilterHouse = (ev) => {
    setFilters({ ...filters, house: ev.target.value });
  };

  const filteredContacts = contacts
    .filter((eachContact) =>
      eachContact.name
        .toLocaleLowerCase()
        .includes(filters.name.toLocaleLowerCase())
    )
    .filter((eachContact) => eachContact.house.includes(filters.house));

  return (
    <>
      <header>
        <h1>El Profeta Digital</h1>
      </header>
      <main>
        <form>
          Buscar por personaje:{" "}
          <span>
            <input
              onInput={handleInputFilterName}
              value={filters.name}
              type="text"
              name="filterName"
              id="filterName"
              placeholder="Filtra los contactos por nombre"
            />
          </span>
          Selecciona la casa
          <span>
            <select
              onInput={handleInputFilterHouse}
              value={filters.house}
              name="house"
              id="house"
            >
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>
          </span>
        </form>
        <List contacts={filteredContacts} />
      </main>
    </>
  );
}

export default App;
