import { FormEvent, useState } from 'react'

import { Formularioform, Botaopesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <form onSubmit={aoEnviarForm}>
      <Formularioform>
        <input
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />

        <Botaopesquisa>Pesquisar</Botaopesquisa>
      </Formularioform>
    </form>
  )
}
export default FormVagas
