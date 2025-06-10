import { useState } from "react";
import "../styles/App.scss";
import data from "../components/data/contacts.json";
import List from "./contacts/List";

function App() {
  const [contacts, setContacts] = useState(data);
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
