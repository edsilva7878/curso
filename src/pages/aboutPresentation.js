import './aboutPresentation.css'
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function AboutPresentation(){
    return(
        <div className='about'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='contAbout'>
                     <div className='setaEsqPresentation'>
                        <Link to='aboutControll' className='setas'><AiFillCaretLeft/></Link>
                    </div>
                    <div className='cardAPresentation'></div>
                    <div className='cardBPresentation'>
                        <h2>ENCERRAMENTO</h2>
                        <p className='textDescription'>
                        O encerramento é a última fase de um projeto. É nessa etapa em que ele é aceito e encerrado. 
                        Sendo assim, é preciso que o cliente assine o termo de aceite do projeto, para formalizar o 
                        seu encerramento.</p>
                    </div>
                    <div className='setaDirPresentation'>
                        <AiFillCaretRight/>
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