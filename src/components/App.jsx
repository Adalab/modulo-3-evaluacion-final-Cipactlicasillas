import { useState } from "react";
import "../styles/App.scss";
import data from "../components/data/contacts.json";
function App() {
  const [contacts, setContacts] = useState(data);
  return (
    <form action="">
      <header>
        <h1>Listado de personajes</h1>
      </header>
      <main>
        <ul>
          {data.map((eachContactObj) => (
            <li key={eachContactObj.patronus}>
              <p>Foto: {eachContactObj.image}</p>
              <p>Nombre: {eachContactObj.name}</p>
              <p>Especie: {eachContactObj.species}</p>
            </li>
          ))}
        </ul>
      </main>
    </form>
  );
}

export default App;
