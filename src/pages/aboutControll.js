import './aboutControll.css'
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom'

export default function AboutControll(){
    return(
        <div className='about'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='contAbout'>
                     <div className='setaEsqControll'>
                        <Link to='aboutExecution' className='setas'><AiFillCaretLeft/></Link>
                    </div>
                    <div className='cardAControll'></div>
                    <div className='cardBControll'>
                        <h2>CONTROLE</h2>
                        <p className='textDescription'>
                        O monitoramento e o controle consiste em analisar o que está sendo produzido. 
                        Essa fase do projeto é importante para que o gestor possa acompanhar o desenvolvimento 
                        do projeto e consiga identificar qualquer situação que exija uma alteração de planos.</p>
                    </div>
                    <div className='setaDirControll'>
                        <Link to='aboutPresentation' className='setas'><AiFillCaretRight/></Link>
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