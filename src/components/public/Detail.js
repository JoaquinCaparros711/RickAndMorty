import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";

export const Detail = () => {
  const [mascota, setMascota] = useState({});
  const { id } = useParams();
  // const {pathname} = useLocation();

  useEffect(() => {
    RickAndMortyService.getCharactersById(id).then((data) => setMascota(data));
  }, []);

  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">
              {mascota.species}
            </strong>

            <h3 className="mb-0 text-dark">{mascota.name}</h3>

            <div className="mb-1 text-muted">
              {new Date(mascota.created).toLocaleDateString()}
            </div>

            <div className="mb-1 text-muted"></div>

            <p className="card-text mb-auto">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>

            <ul className="list-group mt-1">
              <li className="list-group-item">Name: {mascota.name}</li>
              <li className="list-group-item">Status: {mascota.status}</li>
              <li className="list-group-item">Specie: {mascota.species}</li>
              <li className="list-group-item">Gender: {mascota.gender}</li>
              {/* <li className="list-group-item">Location: {mascota.location.name}</li> */}
            </ul>

            <Link to={"/"} className="mt-3 btn btn-outline-dark btn-lg">
              Volver
            </Link>
          </div>

          <img
            className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
            height="auto"
            src={mascota.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
