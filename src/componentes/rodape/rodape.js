import './rodape.css'

const Rodape = () => {
    return (
    <footer>
        <div className='icones'>                           
            <a href="facebook.com" target='_blank'><img className='icone' src="/imagens/fb.png" alt=''/></a>
            <a href="twiter.com" target='_blank'><img className='icone' src='/imagens/tw.png' alt=''/></a>
            <a href='instagram.com' target='_blank'><img className='icone' src='/imagens/ig.png' alt=''/></a>
        </div>
        <img className='iconeOrgano' src='/imagens/logo.png' alt=''/>
        <p >Desenvolvido por Alura</p>
    </footer>
            )

}

export default Rodape