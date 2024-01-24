import { Titulo as TituloEstilo } from './style'

export type Props = {
  children: string
  fontsize?: number
}

const Titulo = (props: Props) => (
  <TituloEstilo fontsize={props.fontsize}>{props.children}</TituloEstilo>
)

export default Titulo
