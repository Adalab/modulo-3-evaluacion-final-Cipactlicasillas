import { Link, useParams } from "react-router";
const defaultImage =
  "https://placehold.co/210x295/000000/666666/?format=svg&text=Harry+Potter";

function DetailPage({ contacts }) {
  const params = useParams();
  const contactToShow = contacts.find(
    (eachContact) => eachContact.name === params.name
  );
  const { image, name, alive, species, gender, house, alternate_names } =
    contactToShow;
  return (
    <div>
      <p>
        <img src={image || defaultImage} alt={`Foto de ${name}`} />
      </p>
      <p>{name}</p>
      <p>Estatus: {alive ? "Vivo" : "Muerto"}</p>
      <p>Especie: {species}</p>
      <p>Género:{gender}</p>
      <p>Casa: {house} </p>
      <p>Nombres Alternativos: {alternate_names}</p>
      <Link to="/">Volver </Link>
    </div>
  );
}

export default DetailPage;
