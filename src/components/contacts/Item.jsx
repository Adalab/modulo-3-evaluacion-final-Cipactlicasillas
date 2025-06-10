const defaultImage =
  "https://placehold.co/210x295/000000/666666/?format=svg&text=Harry+Potter";

function Item({ eachContactObj }) {
  return (
    <>
      <p>
        <img
          src={eachContactObj.image || defaultImage}
          alt={`Foto de ${eachContactObj.name}`}
        />
      </p>
      <p> {eachContactObj.name}</p>
      <p>{eachContactObj.species}</p>
    </>
  );
}

export default Item;
