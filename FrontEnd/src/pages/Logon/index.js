import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";

import api from "../../services/api";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
export default function Logon() {
  const [id, setId] = useState();
  const history = useHistory();
  async function hadleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });
      const { name } = response.data;
      console.log(name);
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", name);
      history.push("/profile");
    } catch (err) {
      alert(`Erro  ao fazer login tente navamente`);
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={hadleLogin}>
          <h1>Seu Login</h1>
          <input
            placeholder="Sua Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn />
            Não tenho Cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
