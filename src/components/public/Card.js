import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ mascota }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">

        <img
          width="80%"
          role="img"
          src={mascota.image}
          alt="imagenes de rick and morty"
        >
        </img>

        <h3 className="mb-0 text-dark text-center">{mascota.name}</h3>

        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={`/details/${mascota.id}`} className="nav-link">
                  Detalle
                </Link>
              </button>
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};
