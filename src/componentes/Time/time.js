import './time.css'

const Time = (props) => {

    const corFundo = {background: props.corFundoTime}
    const corBorda = {borderColor: props.corBordaTime}

    return (
    <section className='organizaçãoTimes' style={corFundo}>
        <h3 style={corBorda}>{props.nomeTime}</h3>
    </section>
)}

export default Time