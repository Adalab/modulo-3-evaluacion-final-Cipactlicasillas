import { useState, useEffect } from "react";
import "../styles/App.scss";
import { Routes, Route } from "react-router";

import ListingPage from "./pages/ListingPage";
import DetailPage from "./pages/DetailPage";

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

  const handleInputFilter = (ev) => {
    const { id, value } = ev.target;
    setFilters({ ...filters, [id]: value });
  };

  const filteredContacts = contacts
    .filter((eachContact) =>
      eachContact.name
        .toLocaleLowerCase()
        .includes(filters.name.toLocaleLowerCase())
    )
    .filter((eachContact) => eachContact.house.includes(filters.house));

  return (
    <div className="page darkmode">
      <header className="header">
        <h1 className="header__title">El Profeta Digital</h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ListingPage
                filteredContacts={filteredContacts}
                filters={filters}
                handleInputFilter={handleInputFilter}
              />
            }
          />
          <Route
            path="/detail/:name"
            element={<DetailPage contacts={contacts} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
