import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import React from 'react'
import { Descrição, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocatema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />

      <Paragrafo tipo="secundario" fontSize={16}>
        Andrei Bonatto
      </Paragrafo>
      <Descrição tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descrição>
      <BotaoTema onClick={props.trocatema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
