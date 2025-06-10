function Item({ eachContactObj }) {
  return (
    <>
      <p>Foto: {eachContactObj.image}</p>
      <p>Nombre: {eachContactObj.name}</p>
      <p>Especie: {eachContactObj.species}</p>
    </>
  );
}
export default Item;
