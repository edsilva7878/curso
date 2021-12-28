import './about.css'
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <div className='aboutFirst'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='cont'>
                <p className='description'>
                Somos Desenvolvedores e Designers de Aplicações Web<br/><br/>
                Ao planejar qualquer projeto, identificamos os passos necessários 
                para atingir o objetivo.<br/>
                Dividindo o projeto em etapas, garantimos a otmização do tempo e o controle de todo o processo.
                Conheça no detalhe, todas essas fazes fundamentais.</p>
            </div>
            <div className='cont2'>
                <Link className='linkAbout' to='/aboutInitiation'>PLANEJAMENTO</Link>
                <Link className='linkAbout' to='/project'>PORTIFÓLIO</Link>
            </div>
            <div className='footer'>

                <h5>seven78eight.com.br</h5>
            </div>
        </div>
    )
}