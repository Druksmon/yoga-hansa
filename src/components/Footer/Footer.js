import './Footer.css'
import logo from '../assets/LOGO HANSA REDUCIDO.png'
import whatsapp from '../assets/icons/whatsapp.png'
import instagram from '../assets/icons/instagram.png'
import facebook from '../assets/icons/facebook.png'
import mail from '../assets/icons/email.png'

const Footer = () => {
    return (
        <>
            <div id='footer' className="footer-container">
                <div className="footer-selector">
                    <div className="footer-logo">
                        <img src={logo} alt=""/>
                        <div>
                            <h2>Ximena Pissaco</h2>
                            <h4>Metodo Hansa</h4>
                            <p>Formacion en Yoga avalada por IADB. <br/>
                                Inst. Arg. de Descodificacion Biologica.</p>

                        </div>

                    </div>
                    <div className="footer-info">

                            <a target='_blank' href="https://wa.me/5493516639232">
                                <img src={whatsapp} alt=""/> WhatsApp
                            </a>
                            <a target='_blank' href="https://www.instagram.com/ximena.pissaco/">
                                <img src={instagram} alt=""/> Instagram
                            </a>
                            <a target='_blank' href="https://m.facebook.com/people/Ximena-Pissaco/100001014314513">
                                <img src={facebook} alt=""/> Facebook
                            </a>
                            <a target='_blank'  href="mailto:cordobazen@gmail.com">
                                <img src={mail} alt=""/> Mail
                            </a>

                    </div>
                    <a className='my-name' target='_blank' href="https://dario-volkmann-portfolio.web.app/">Diseñado y desarrollado por @dario-volkmann</a>
                </div>
            </div>
        </>
    )
}

export default Footer