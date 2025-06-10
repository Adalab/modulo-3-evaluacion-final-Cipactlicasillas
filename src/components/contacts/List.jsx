import Item from "./Item";

function List({ contacts }) {
  return (
    <ul className="contact">
      {contacts.map((eachContactObj) => (
        <li key={eachContactObj.id} className="contact_item">
          <Item eachContactObj={eachContactObj} />
        </li>
      ))}
    </ul>
  );
}
export default List;
