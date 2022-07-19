import Apresentacao from "./Componentes/Apresentacao/Apresentacao"
import Footer from "./Componentes/Footer/Footer"
import Header from "./Componentes/Header/Header"
import Imagens from "./Componentes/Imagens/Imagens"
import Projetos from "./Componentes/Projetos/Projetos"
import Repositorios from "./Componentes/Repositorios/Repositorios"
import Titulos from "./Componentes/Titulos/Titulos"
import "./App.css"


function App() {

  return (
  <> 
  <header>
  <Header> Meu Portfólio da Reprograma </Header>
  </header>

  <nav className="navbar">
      <Imagens image="https://media.giphy.com/media/SHganYCkkSElyTJj7r/giphy.gif" alt="imagem da desenvolvedora do site" />
      <Titulos title="Olá, eu sou a Ayane Martins" />
    </nav>

  <section>
    <Apresentacao>Meu nome é Ayane Martins, tenho 28 anos, sou mineirinha, nascida e criada em Juiz de Fora. Jornalista, formada pela Universidade Federal de Juiz de Fora - UFJF, especialista em Marketing pela Universidade de São Paulo - USP e futura desenvolvedora Front-end pela Reprograma. Sempre gostei muito da área de comunicação, mas vivendo o processo de transição de carreira encontrei na tecnologia uma nova paixão e um mundo de possibilidades. Abaixo estão alguns projetos desenvolvidos ao longo do curso. </Apresentacao>
    <hr/>
  </section>

  <section>
         <Projetos/>
 </section>

  <article>
       < Repositorios/>
 </article>

  <footer>
        <Footer> Página desenvolvida por Ayane Martins | Turma On17 | 2022 </Footer>
    </footer>


    </>
    )
}
export default App
