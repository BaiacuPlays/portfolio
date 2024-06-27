import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import React from 'react'

import { Card, LinkBotao } from './styles'

interface ProjetoProps {
  url: string
  nome: string
  descricao: string
}

const Projeto = ({ url, nome, descricao }: ProjetoProps) => (
  <Card>
    <Titulo fontsize={18}>{nome}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao href={url} target="_blank">
      Visualizar
    </LinkBotao>
  </Card>
)
export default Projeto
