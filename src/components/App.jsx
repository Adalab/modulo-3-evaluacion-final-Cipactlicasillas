import { useState, useEffect } from "react";
import "../styles/App.scss";
import List from "./contacts/List";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);
  return (
    <form action="">
      <header>
        <h1>Listado de personajes</h1>
      </header>
      <main>
        <List contacts={contacts} />
      </main>
    </form>
  );
}

export default App;
