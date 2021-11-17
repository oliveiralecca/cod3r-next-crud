import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Input from "./Input";

interface FormularioProps {
  cliente: Cliente

}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
      {id ? <Input somenteLeitura label="Código" valor={id} className="mb-5" /> : false}
      <Input label="Nome" valor={nome} valorMudou={setNome} className="mb-5" />
      <Input label="Idade" tipo="number" valor={idade} valorMudou={setIdade} />

      <div className="flex justify-end mt-7">
        <Botao cor="blue" className="mr-2">
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}
