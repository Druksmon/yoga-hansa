import '../Service.css'
import  './Consultorio.css'
import Footer from "../../../components/Footer/Footer";
import moreLogo from '../../../components/assets/icons/more.png'
import consultorio from '../../../components/assets/icons/consultorio.png'



import {Link} from "react-router-dom";
import WhatsAppButton from "../../../components/WhatsAppButton/WhatsAppButton";

// const [icon, setIcon] = useState('');

const Consultorio = () => {
    return (
        <>
            <div id='header' className="service-container">

                <div className="service-selector">

                    <div className='service-detail'>
                        <Link to='/' className='service-back'>&larr; Menu Principal </Link>
                        <img className='service-logo' src={consultorio} alt=""/>
                        <h1>
                            Consultorio
                        </h1>
                        <p>Biodescodificacion y Constelaciones familiares ( consulta individual)</p>

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
                                        <h3>Horarios Flexibles </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p>A travez de la Biodescodificacion y las Constelaciones Familiares te acompaño en tu proceso
                            de sanación y evolución.
                        </p>
                        <br/>
                        <p>Esto incluye el acompañamiento en procesos de sanacion fisico (enfermedades o sintomas) Y la
                            resolucion de conflictos emocionales y/o conductuales.
                        </p>
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

export default Consultorio