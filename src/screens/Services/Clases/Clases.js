import '../Service.css'
import Footer from "../../../components/Footer/Footer";
import moreLogo from '../../../components/assets/icons/more.png'
import clasesLogo from '../../../components/assets/icons/clases.png'



import {Link} from "react-router-dom";
import WhatsAppButton from "../../../components/WhatsAppButton/WhatsAppButton";

// const [icon, setIcon] = useState('');

const Clases = () => {
    return (
        <>


            <div id='header' className="service-container ">

                <div className="service-selector">

                    <div className='service-detail'>
                        <Link to='/' className='service-back'>&larr; Menu Principal </Link>
                        <img className='service-logo' src={clasesLogo} alt=""/>
                        <h1>
                            Clases
                        </h1>
                        <p>Yoga- Chi Kung - Meditacion</p>

                        <div className="service-boxes-container">
                            <div className='service-boxes'>
                                <div className="service-box-1">
                                    <div className='service-box-selector'>
                                        <img src={moreLogo} alt=""/>
                                        <h3>Presencial</h3>
                                    </div>
                                </div>
                                <div className="service-box-2">
                                    <div className='service-box-selector'>
                                        <img src={moreLogo} alt=""/>
                                        <h3>Virtual</h3>
                                    </div>
                                </div>
                                <div className="service-box-3">
                                    <div className='service-box-selector'>
                                        <img src={moreLogo} alt=""/>
                                        <h3>Diferido</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="service-box-text">
                            <h6>Yoga</h6>
                            <p>
                                Mis clases que son dinámicas y profundas. <br/>
                                Te proveen de un excelente entrenamiento físico y a su vez te llevan, casi sin darte cuenta,
                                a un exquisito estado de concentración y relajación.
                            </p>
                            <br/>
                            <h6>Chi Kung</h6>
                            <p>
                                Mi clase de Chi Kung tiene el efecto de una sesión de acupuntura
                                Aprenderás a mover el Chi por tus meridianos y a Autosanarte!
                            </p>
                            <br/>
                            <h6>Meditación</h6>
                            <p>
                                ¿Quieres aprender a calmar tu mente? <br/>
                                Te invito a esta practica simple que cambiara profunfamente tu vida, entrando en estados profundamente snadores e intuitivos.
                            </p>
                        </div>

                        <div className='services-contact'>
                            <WhatsAppButton/>
                            <a  href="mailto:cordobazen@gmail.com" target="_blank">Consulta por Mail ></a>
                        </div>


                    </div>
                </div>
            </div>


            <Footer/>
        </>
    )
}

export default Clases