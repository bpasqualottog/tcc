// src/pages/Cadastro.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase"; // importa o auth do firebase
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function cadastrar(event) {
    event.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Usuário cadastrado com sucesso!");
      navigate("/"); // redireciona para login
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar: " + error.message);
    }
  }

  return (
    <main style={{ padding: 20, maxWidth: 400, margin: "0 auto" }}>
      <h1>Cadastro</h1>
      <form onSubmit={cadastrar}>
        <label>
          Email:
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </label>
        <br />
        <br />
        <label>
          Senha:
          <br />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}
