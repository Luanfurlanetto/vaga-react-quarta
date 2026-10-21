import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <header>
        <h1>OpenBoard</h1>
        <div>
            <a id="testelink" href="https://google.com">Entrar</a>
            <button class="btn">Publicar Vaga - $299</button>
        </div>
    </header>

     <footer>
        <p>OpenBoard 2026 todos os direitos reservados</p>

        <nav>
            <a href="">Entrar</a>
            <a href="">Publicar Vaga</a>
            <a href="">Sobre</a>
            <a href="">Privacidade</a>
        </nav>

    </footer>
      </div>
  )
}

export default App
