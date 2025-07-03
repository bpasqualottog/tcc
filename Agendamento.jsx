import React, { useState } from "react";
import { db } from "../firebase"; // importa a instância do Firestore
import { collection, addDoc } from "firebase/firestore";
import "../styles/Agendamento.css";

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const agendar = async () => {
    if (!nome || !especialidade || !data || !hora) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, "agendamentos"), {
        nome,
        especialidade,
        data,
        hora,
        criadoEm: new Date(),
      });
      alert("Consulta agendada com sucesso!");
      setNome("");
      setEspecialidade("");
      setData("");
      setHora("");
    } catch (error) {
      console.error("Erro ao agendar consulta:", error);
      alert("Erro ao agendar. Tente novamente.");
    }
  };

  return (
    <div className="agendamento-container">
      <h1>Agende sua Consulta</h1>

      <input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <select
        value={especialidade}
        onChange={(e) => setEspecialidade(e.target.value)}
      >
        <option value="">Selecione a especialidade</option>
        <option value="Clínica Geral">Clínica Geral</option>
        <option value="Pediatria">Pediatria</option>
        <option value="Ginecologia">Ginecologia</option>
        <option value="Cardiologia">Cardiologia</option>
        <option value="Dermatologia">Dermatologia</option>
      </select>

      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />

      <button onClick={agendar}>Agendar</button>
    </div>
  );
}
