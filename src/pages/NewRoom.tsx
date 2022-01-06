import { Link } from 'react-router-dom';

import illustationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../Components/Button'

import '../styles/auth.scss'

export function NewRoom(){
  return (
    <div id="page-auth">
      <aside>
        <img src={illustationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiencia em tempo real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input 
              type="text" 
              placeholder='Nome da Sala'
            />
            <Button type="submit">
              Criar Sala
            </Button>
            <p>Quer entrar em uma sala existente? clique <Link to="/">aqui</Link>.</p>
          </form>
        </div>
      </main>
    </div>
  )
}