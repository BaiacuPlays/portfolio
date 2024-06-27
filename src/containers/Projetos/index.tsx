import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import React from 'react'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontsize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          url="https://projeto-efood-beta.vercel.app"
          nome="Projeto Efood"
          descricao="Descrição do Projeto 1"
        />
      </li>
      <li>
        <Projeto
          url="https://calculadora-basica-eta.vercel.app"
          nome="Calculadora Basica"
          descricao="Descrição do Projeto 9"
        />
      </li>
      <li>
        <Projeto
          url="https://gcs-jquery-galeria-fotos-nine.vercel.app"
          nome="Galeria de fotos"
          descricao="Descrição do Projeto 3"
        />
      </li>

      <li>
        <Projeto
          url="https://andrei-projeto-calculadora-medias.vercel.app"
          nome="Calculadora de Medias (Notas)"
          descricao="Descrição do Projeto 5"
        />
      </li>
      <li>
        <Projeto
          url="https://projetolandingpageaniversario.vercel.app"
          nome="Pagina de aniversario com timer"
          descricao="Descrição do Projeto 6"
        />
      </li>
      <li>
        <Projeto
          url="https://projeto4clonestardew.vercel.app"
          nome="Stardew valley"
          descricao="Descrição do Projeto 7"
        />
      </li>
      <li>
        <Projeto
          url="https://projeto-agenda-telefonica-teal.vercel.app"
          nome="Agenda de contatos"
          descricao="Descrição do Projeto 8"
        />
      </li>
      <li>
        <Projeto
          url="https://projeto-player-musica.vercel.app"
          nome="Player de Musica"
          descricao="Descrição do Projeto 10"
        />
      </li>
      <li>
        <Projeto
          url="https://site-alltimelow.vercel.app"
          nome="Pagina de produto (Album musical)"
          descricao="Descrição do Projeto 2"
        />
      </li>
      <li>
        <Projeto
          url="https://sparkgameshopprojetotres.vercel.app"
          nome="Loja de games"
          descricao="Descrição do Projeto 4"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
