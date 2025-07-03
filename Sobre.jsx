// src/pages/Sobre.jsx
import React from "react";
import "../styles/Sobre.css";

export default function Sobre() {
  return (
    <main className="sobre-container">
      <section className="texto-sobre">
        <h1>Sobre a VivaMed</h1>
        <hr />
        <p>
          A <strong>VivaMed</strong> é uma clínica médica dedicada a cuidar da
          saúde e do bem-estar dos nossos pacientes. Com uma equipe altamente
          qualificada, oferecemos atendimento humanizado e serviços de
          qualidade.
        </p>
        <p>
          Nossa missão é garantir que cada pessoa receba o cuidado que merece,
          sempre com carinho e profissionalismo.
        </p>
        <blockquote className="slogan">
          “Cuidar de você é o nosso compromisso!”
        </blockquote>
      </section>

      <section className="imagens-sobre">
        <h2>Nosso Espaço e Nossa Equipe</h2>
        <div className="galeria-imagens">
          <figure>
            <img src="https://i.ibb.co/8JXF2zP/foto.jpg" alt="Equipe médica" />
            <figcaption>Equipe médica dedicada e qualificada</figcaption>
          </figure>

          <figure>
            <img
              src="https://i.ibb.co/6cKnpj64/Whats-App-Image-2025-06-22-at-17-11-33.jpg"
              alt="Atendimento na clínica"
            />
            <figcaption>Ambiente acolhedor para atendimento</figcaption>
          </figure>

          <figure>
            <img
              src="https://www.galeriadaarquitetura.com.br/img/projeto/702x415/854/clinicamedica1369.jpg"
              alt="Instalações modernas da clínica"
            />
            <figcaption>Instalações modernas e confortáveis</figcaption>
          </figure>

          <figure>
            <img
              src="https://i.ibb.co/JWsDbr7s/Whats-App-Image-2025-06-22-at-17-15-02.jpg"
              alt="Cuidados com a saúde"
            />
            <figcaption>Cuidado e atenção em cada consulta</figcaption>
          </figure>

          <figure>
            <img
              src="https://santidiagnostico.com.br/images/meta/f78ca796-ba35-4103-b4c6-65eb43096c41/f45bde4b-ce2f-4b10-8372-36dfcb45d511/157.jpg"
              alt="Tecnologia de ponta"
            />
            <figcaption>Exames realizados com inovação e qualidade</figcaption>
          </figure>

          <figure>
            <img
              src="https://f.i.uol.com.br/fotografia/2023/04/06/1680793960642ee16833bc9_1680793960_3x2_rt.jpg"
              alt="Cuidados preventivos com paciente"
            />
            <figcaption>Foco na prevenção e bem-estar contínuo</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
