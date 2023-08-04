import Colaborador from '../Colaborador/colaborador'
import './time.css'

const Time = (props) => {

    const corFundo = {background: props.corFundoTime}
    const corBorda = {borderColor: props.corBordaTime}

    return (
        props.colaboradores.length > 0 && <section className='organizaçãoTimes' style={corFundo}>
            <h3 style={corBorda}>{props.nomeTime}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador=><Colaborador corDeFundo={props.corBordaTime} key= {colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )}

export default Time