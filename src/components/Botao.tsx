interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  const cor = props.cor ?? 'gray' //se props.cor estiver setado, é ela que será usada, caso contrário, a cor usada por padrão será 'gray'
  
  return (
    <button onClick={props.onClick} className={`
      bg-gradient-to-r from-${cor}-500 to-${cor}-700
      text-white px-4 py-2 rounded-md
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}
