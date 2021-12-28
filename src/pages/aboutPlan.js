import './aboutPlan.css'
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function AboutPlan(){
    return(
        <div className='about'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='contAbout'>
                     <div className='setaEsqPlan'>
                        <Link to='aboutInitiation' className='setas'><AiFillCaretLeft/></Link>
                    </div>
                    <div className='cardAPlan'></div>
                    <div className='cardBPlan'>
                        <h2>PLANEJAMENTO</h2>
                        <p className='textDescription'>
                        Com a autorização da diretoria para dar continuidade no projeto e com todos as ações da 
                        etapa de iniciação concluídas, é hora de planejar. Nessa etapa é preciso ser mais minucioso 
                        e olhar para o micro. Aliás, essa é a fase mais importante para a conclusão do projeto.</p>
                    </div>
                    <div className='setaDirPlan'>
                        <Link to='aboutExecution' className='setas'><AiFillCaretRight/></Link>
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