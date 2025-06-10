import Item from "./Item";

function List({ contacts }) {
  return (
    <ul>
      {contacts.map((eachContactObj) => (
        <li key={eachContactObj.patronus}>
          <Item eachContactObj={eachContactObj} />
        </li>
      ))}
    </ul>
  );
}
export default List;
