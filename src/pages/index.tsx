import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Letícia', 28, '1'),
    new Cliente('Laís', 32, '2'),
    new Cliente('Cláudia', 55, '3'),
    new Cliente('Sergio', 57, '4'),
    new Cliente('Murilo', 2, '5'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.idade);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);  
    setVisivel('tabela')
  }

  function novoCliente() {
    setCliente(Cliente.vazio()) 
    setVisivel('form')
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples | CRUD">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={novoCliente}>Novo cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={() => setVisivel('tabela')} clienteMudou={salvarCliente} />
        )}        
      </Layout>
    </div>
  )
}
