import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        {" - "}
        <span>Data: {notice.date}</span>
      </div>

      {showDetails && (
        <p>
          {notice.id === 1
            ? "A Secitex, Semana de Ciência, Tecnologia e Extensão do IFRN, é um evento voltado à divulgação do conhecimento e ao fortalecimento da interação entre estudantes, servidores e a comunidade. Durante sua realização, são promovidas atividades como apresentações de trabalhos científicos, oficinas, exposições de projetos, ações de extensão e manifestações culturais, incentivando a troca de experiências e a inovação."
            : "A Semana do Meio Ambiente do IFRN é um evento dedicado à promoção da educação ambiental e da sustentabilidade. Ao longo da programação, são realizadas palestras, oficinas, ações de conscientização, atividades de plantio de mudas e discussões sobre a preservação dos recursos naturais, estimulando a comunidade acadêmica a adotar práticas mais responsáveis em relação ao meio ambiente."}
        </p>
      )}

      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>

        <button
          className="details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Ocultar detalhes" : "Exibir"}
        </button>

        <button onClick={() => onDeleteNotice(notice.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;