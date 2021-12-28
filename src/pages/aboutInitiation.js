import './aboutInitiation.css'
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function AboutInitiation(){
    return(
        <div className='about'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='contAbout'>
                     <div className='setaEsq'><AiFillCaretLeft/></div>
                    <div className='cardA'></div>
                    <div className='cardB'>
                        <h2>INICIAÇÃO</h2>
                        <p className='textDescription'>A iniciação é, como o próprio nome diz, a fase inicial de qualquer projeto. 
                            É nesse momento que o gestor deve analisar o projeto como uma visão macro. 
                            Perceber quais são os objetivos que se quer alcançar, quais os problemas 
                            que se quer resolver, identificar as necessidades e a viabilidade.</p>
                    </div>
                    <div className='setaDir'>
                        <Link to='aboutPlan' className='setas'><AiFillCaretRight/></Link>
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