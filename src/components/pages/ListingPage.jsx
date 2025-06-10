import List from "../contacts/List";
import Item from "../contacts/Item";
function ListingPage({ filteredContacts, filters, handleInputFilter }) {
  return (
    <>
      <form>
        Buscar por personaje:{" "}
        <span>
          <input
            onInput={handleInputFilter}
            value={filters.name}
            type="text"
            name="name"
            id="name"
            placeholder="Filtra los contactos por nombre"
          />
        </span>
        Selecciona la casa
        <span>
          <select
            onInput={handleInputFilter}
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
        {filteredContacts.length === 0 ? (
          <p>
            No hay ningún personaje que coincida con la palabra "{filters.name}
            ".
          </p>
        ) : (
          <ul>
            {filteredContacts.map((eachContact) => (
              <li key={eachContact.id}>
                <Item eachContactObj={eachContact} />
              </li>
            ))}
          </ul>
        )}
      </form>
      <List contacts={filteredContacts} />
    </>
  );
}

export default ListingPage;
