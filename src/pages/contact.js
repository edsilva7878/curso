import './contact.css'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

export default function Contact(){
    return(
        <div className='contact'>
            <div className='header'>
                <h1>Seven78Eight</h1>
            </div>
            <div className='contContact'>
                <form className='form'>
                    <p>Entre em contato</p>
                    <div>
                        <input className='namePhone' type='text' placeholder='NOME'/>
                        <input className='namePhone' type='text' placeholder='TELEFONE'/>
                    </div>
                    <input className='email' type='text' placeholder='EMAIL'/>
                    <input className='textArea' type='text' placeholder='MENSAGEM'/>
                    <div>
                        <button>ENVIAR</button>
                        <button>LIMPAR</button>
                    </div>
                </form>
                <div className='areaIcons'>
                    <p>Nossas Mídias</p>
                    <div className='midiaIcons'><AiFillGithub/></div>
                    <div className='midiaIcons'><AiFillLinkedin/></div>
                    <div className='midiaIcons'><SiGmail/></div>
                    <div className='midiaIcons'><AiOutlineWhatsApp/></div>
                </div>
            </div>
            <div className='contContact2'>
                <Link className='linkContact' to='/project'>PORTIFÓLIO</Link>
                <Link className='linkContact' to='/'>HOME</Link>

            </div>
            <div className='footer'>
                <h5>seven78eight.com.br</h5>
            </div>
        </div>
    )
}