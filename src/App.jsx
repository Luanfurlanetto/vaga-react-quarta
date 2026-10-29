import Header from './components/header'
import Hero from './components/Hero'
import Footer from './components/footer'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      

      <Hero
        title="Vagas de tecnologia para todos"
        subtitle="Acesse as melhores vagas de tecnologia do Brasil, direto no seu inbox"
         <button id="bt" className="btn cta">Publicar Vaga - $299</button>
      />

      <div className="conteudo">
        <main>
          <div className="conteudo__header">
            <h2>Últimas vagas</h2>
            <span>7 vagas - atualizado agora</span>
          </div>

          <div className="card">
            <div className="card__avatar">
              V
            </div>
            <div className="card__text">
              <p>Vercel</p>
              <h3 className="card__title">Full-stack Enginner </h3>
              <span className="card__badge">R$20k - R$30k</span>
              <span className="card__badge">Remoto</span>
            </div>
            <div className="card__actions">
              <span>2h</span>
              <a href="">candidatar-se</a>
            </div>
          </div>

          <div className="card">
            <div className="card__avatar card__avatar--grey">
              V
            </div>
            <div className="card__text">
              <p>Vercel</p>
              <h3 className="card__title">Full-stack Enginner </h3>
              <span className="card__badge">R$20k - R$30k</span>
              <span className="card__badge">Remoto</span>
            </div>
            <div className="card__actions">
              <span>2h</span>
              <a href="">candidatar-se</a>
            </div>
          </div>

        </main>

        <aside>
          <div className="conteudo__header">
            <h3>Filtros</h3>
            <a id="btn-limpar" href="">limpar</a>
          </div>

          <div className="alert">
            filtros limpos!
          </div>

          <div className="conteudo__filter">
            <p>Tipo de vaga</p>

            <label htmlFor="ck-efetivo">
              <input className="Filtro" type="checkbox" name="ck-efetivo" id="ck-efetivo" /> Efetivo
            </label>
            <label htmlFor="ck-estagio">
              <input className="Filtro" type="checkbox" name="ck-estagio" id="ck-estagio" /> Estágio
            </label>
            <label htmlFor="ck-meio">
              <input className="Filtro" type="checkbox" name="ck-meio" id="ck-meio" /> Meio período
            </label>
          </div>

          <div className="conteudo__filter">
            <p>Área</p>

            <label htmlFor="ck-engenharia">
              <input className="Filtro" type="checkbox" name="ck-engenharia" id="ck-engenharia" /> Engenharia
            </label>
            <label htmlFor="ck-design">
              <input className="Filtro" type="checkbox" name="ck-design" id="ck-design" /> Design
            </label>
            <label htmlFor="ck-gestao">
              <input className="Filtro" type="checkbox" name="ck-gestao" id="ck-gestao" /> Gestão
            </label>
          </div>

          <div className="conteudo__filter">
            <p>Localização</p>

            <label htmlFor="ck-sp">
              <input className="Filtros" type="checkbox" name="ck-sp" id="ck-sp" /> São Paulo
            </label>
            <label htmlFor="ck-sc">
              <input className="Filtros" type="checkbox" name="ck-sc" id="ck-sc" /> Santa Catarina
            </label>
            <label htmlFor="ck-rs">
              <input className="Filtros" type="checkbox" name="ck-rs" id="ck-rs" /> Rio Grande do Sul
            </label>
          </div>
        </aside>
      </div>

      <section className="hero">
        <h2>Vagas novas, toda quinta-feira</h2>
        <p>Um resumo curto das melhores vagas direto no seu inbox</p>
        <form action="">
          <input className="form__input" type="email" name="email" id="email" placeholder="seu@email.com" />
          <button className="btn" type="submit">Assinar</button>
        </form>
      </section>
        
        <Hero
        title="Quem já usa o OpenBoard"
        subtitle="Depoimentos de recrutadores e candidatos que já fecharam vaga por aqui."
      />

        

      <section className="hero">
        <h2>Quem já usa o OpenBoard</h2>
        <p>Depoimentos de recrutadores e candidatos que já fecharam vaga por aqui.</p>

        <div className="depoimentos">
          <div>
            <p>Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques</p>
            <span>Lucas Vergara</span>
            <span>Software enginner - SATC</span>
          </div>

          <div>
            <p>Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques</p>
            <span>Lucas Vergara</span>
            <span>Software enginner - SATC</span>
          </div>

          <div>
            <p>Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques</p>
            <span>Lucas Vergara</span>
            <span>Software enginner - SATC</span>
          </div>
        </div>
      </section>

      <Footer />  

      
    </div>
  )
}

export default App