import Dados from'./Dados'
import './Projetos.css'

const Projetos = () => {
  return (
  <>
  <div className="projects-container">
    <h1>4 Projetos que fiz na Reprograma</h1>
    {Dados.map((projeto) => {
      
      return(
        <div className="project-card">
        <h2>{projeto.title}</h2>
        <img src={projeto.gif} alt={projeto.title} />
        <p>{projeto.description}</p>
        <a href={projeto.link} target="_blank">⤴ </a>
        </div>
        )
      
    })}
    </div>
  </>
);
}

export default Projetos