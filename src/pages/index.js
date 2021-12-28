import './index.css'
import { Link } from 'react-router-dom'

export default function Index(){
    return(
        <div className='index'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='contIndex'>
                <p>SEJA BEM-VINDO</p>
                <p>DESENVOLVIMENTO E DESIGN DE APLICAÇÕES WEB</p>
                <Link className='link' to='/about'>SAIBA MAIS</Link>
            </div>
            <div className='footer'>
                <h5>seven78eight.com.br</h5>
            </div>
        </div>
    )
}