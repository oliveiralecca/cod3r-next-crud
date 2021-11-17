import Cliente from "../core/Cliente";
import { IconeEditar, IconeExcluir } from "./Icones";

interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function cabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="text-center p-4">Ações</th> : false}
      </tr>
    )
  }

  function dados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes ? acoes(cliente) : false}
        </tr>
      )
    })
  }

  function acoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
            flex justify-center items-center
            text-green-600 rounded-full p-1 m-1
            hover:bg-purple-50
          `}>
            {IconeEditar}
          </button>
        ) : false}
        
        {props.clienteExcluido ? (
          <button onClick={() => props.clienteExcluido?.(cliente)} className={`
            flex justify-center items-center
            text-red-500 rounded-full p-1 m-1
            hover:bg-purple-50
          `}>
            {IconeExcluir}
          </button>
        ) : false}        
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100 
      `}>
        {cabecalho()}
      </thead>
      <tbody>
        {dados()}
      </tbody>
    </table>
  )
}
