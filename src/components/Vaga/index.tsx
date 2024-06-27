import { Vagaa, Vagatitulo, Vagalink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagaa>
    <Vagatitulo>
      <h3>{props.titulo}</h3>
    </Vagatitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <Vagalink>
      <a>Ver detalhes e candidatar-se</a>
    </Vagalink>
  </Vagaa>
)

export default Vaga
