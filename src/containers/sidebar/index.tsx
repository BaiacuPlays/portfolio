import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descrição, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocatema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontsize={20}> Andrei Bonatto </Titulo>
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
