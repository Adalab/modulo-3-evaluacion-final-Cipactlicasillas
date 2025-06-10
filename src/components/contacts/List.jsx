import Item from "./Item";

function List({ contacts }) {
  return (
    <ul>
      {contacts.map((eachContactObj) => (
        <li key={eachContactObj.id}>
          <Item eachContactObj={eachContactObj} />
        </li>
      ))}
    </ul>
  );
}
export default List;
