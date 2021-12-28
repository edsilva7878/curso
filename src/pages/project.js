import './project.css'
import { Link } from 'react-router-dom'

export default function Project(){
    return(
        <div className='project'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='contProject'>
                <div className='card1'></div>
                <div className='card2'></div>
                <div className='card3'></div>
                <div className='card4'></div>
                <div className='card5'></div>
            </div>
            <div className='cont2Project'>
                <Link className='linkProject' to='/about'>SOBRE</Link>
                <Link className='linkProject' to='/contact'>CONTATO</Link>
            </div>
            <div className='footer'>
                <h5>sevev78eight.com.br</h5>
            </div>
        </div>
    )
}