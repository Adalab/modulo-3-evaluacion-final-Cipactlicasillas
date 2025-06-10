import { Link } from "react-router";

const defaultImage =
  "https://placehold.co/210x295/000000/666666/?format=svg&text=Harry+Potter";

function Item({ eachContactObj }) {
  return (
    <Link to={"/detail/" + eachContactObj.name}>
      <div className="card">
        <img
          className="card__image"
          src={eachContactObj.image || defaultImage}
          alt={`Foto de ${eachContactObj.name}`}
        />
      </div>
      <div className="card__info">
        <p className="card__info-name"> {eachContactObj.name}</p>
        <p className="card__info-location">{eachContactObj.species}</p>
      </div>
    </Link>
  );
}

export default Item;
