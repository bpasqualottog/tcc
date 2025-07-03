// src/pages/Home.jsx
import React, { useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [bannerIndex, setBannerIndex] = useState(0);

  const banners = [
    {
      titulo: "Atendimento Humanizado",
      texto:
        "Com foco no cuidado individual, a VivaMed oferece atenção e respeito em cada consulta.",
      imagem:
        "https://images.unsplash.com/photo-1588776814546-77a7584aa413?auto=format&fit=crop&w=1350&q=80",
    },
    {
      titulo: "Agendamento Rápido",
      texto: "Agende sua consulta em poucos cliques com agilidade e segurança.",
      imagem:
        "https://images.unsplash.com/photo-1576765607924-f0e2328a9ec7?auto=format&fit=crop&w=1350&q=80",
    },
    {
      titulo: "Equipe Especializada",
      texto:
        "Profissionais experientes e capacitados para cuidar da sua saúde.",
      imagem:
        "https://images.unsplash.com/photo-1504439904030-b0fddf16a261?auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const proximoBanner = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <main className="home">
      <section className="home-banner" onClick={proximoBanner}>
        <img src={banners[bannerIndex].imagem} alt="Banner" />
        <div className="home-banner-texto">
          <h1>{banners[bannerIndex].titulo}</h1>
          <p>{banners[bannerIndex].texto}</p>
        </div>
      </section>

      <section className="home-botoes">
        <Link to="/agendamento">
          <button className="home-btn">Agendar Consulta</button>
        </Link>
        <Link to="/sobre">
          <button className="home-btn">Conheça a VivaMed</button>
        </Link>
      </section>

      <section className="home-beneficios">
        <div className="beneficio">
          <h3>🛋️ Comodidade</h3>
          <p>Agende sua consulta sem sair de casa.</p>
        </div>
        <div className="beneficio">
          <h3>⚡ Rapidez</h3>
          <p>Agendamento fácil e rápido.</p>
        </div>
        <div className="beneficio">
          <h3>✅ Agilidade</h3>
          <p>Tudo em poucos cliques!</p>
        </div>
      </section>

      <section className="home-contato">
        <h2>Entre em contato</h2>
        <p>📞 Telefone: (41) 3340-3000</p>
        <p>📍 Endereço: Av. República Argentina, 650 - Curitiba/PR</p>
        <p>📧 E-mail: contato@vivamed.com.br</p>
      </section>

      <footer className="home-rodape">
        <p>© VivaMed 2025 - Todos os direitos reservados</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>{" "}
          |
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>{" "}
          |
          <a href="https://wa.me/5541999999999" target="_blank">
            WhatsApp
          </a>
        </div>
      </footer>
    </main>
  );
}
