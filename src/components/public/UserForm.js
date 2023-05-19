import React, { useEffect, useState } from "react";
import { useUserForm } from "../../hooks/Custom.hooks";

export const UserForm = () => {
  const { form, handleChanges, setForm } = useUserForm();

  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
  }, [passwordConfirmation]);

  return (
    <form className="formulario">
      <div className="mb-3">
        <h1 className="text-center">FORMULARIO</h1>
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="you@example.com"
          name="email"
          onChange={handleChanges}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Clave</label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChanges}
        />
        <label className="form-label">Repetir Clave</label>
        <input
          type="password"
          className="form-control"
          onChange={handlePasswordConfirmation}
        />
      </div>

      {!areEquals && (
        <div className="alert alert-danger" role="alert">
          Las claves no son iguales.
        </div>
      )}

      <hr className="my-4" />

      <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={!areEquals}>
        Registrarme
      </button>
    </form>
  );
};
