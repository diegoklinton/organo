import "./Formulario.css"
import CampoTexto from "../campoTexto/index.js"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import Botao from "../Botao/Botao"
import { useState } from 'react';

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]



const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoNovoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }   

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha para criar o card do colaborador</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)} />

                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite o seu cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>

                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}/>
                
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>            
        </section>       
    )
}

export default Formulario