import './aboutExecution.css'
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function AboutExecution(){
    return(
        <div className='about'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='contAbout'>
                     <div className='setaEsqExecution'>
                        <Link to='aboutplan' className='setas'><AiFillCaretLeft/></Link>
                    </div>
                    <div className='cardAExecution'></div>
                    <div className='cardBExecution'>
                        <h2>EXECUÇÃO</h2>
                        <p className='textDescription'>
                        Com o planejamento concluído é hora de ir para a execução do projeto. É nessa fase 
                        do projeto que tudo o que foi planejado é colocado em prática. Assim, o gestor precisa 
                        reunir a sua equipe e fazer o seu gerenciamento enquanto ela executa as tarefas. Aliado 
                        a isso, é necessário se manter fiel ao planejamento.</p>
                    </div>
                    <div className='setaDirExecution'>
                        <Link to='aboutControll' className='setas'><AiFillCaretRight/></Link>
                    </div>
            </div>
            <div className='contAbout2'>
                <Link className='linkAbout' to='/about'>SOBRE</Link>
                <Link className='linkAbout' to='/project'>PORTIFÓLIO</Link>
            </div>
            <div className='footer'>

                <h5>seven78eight.com.br</h5>
            </div>
        </div>
    )
}