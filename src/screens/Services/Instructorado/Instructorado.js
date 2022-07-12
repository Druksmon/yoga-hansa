import '../Service.css'
import './Instructorado.css'
import Footer from "../../../components/Footer/Footer";
import instructoradoLogo from '../../../components/assets/icons/instructorado.png'
import moreLogo from '../../../components/assets/icons/more.png'


import {Link} from "react-router-dom";
import WhatsAppButton from "../../../components/WhatsAppButton/WhatsAppButton";

// const [icon, setIcon] = useState('');

const Instructorado = () => {
    return (
        <>
            <div id='header' className="service-container ">
                <div className="service-selector">

                    <div className='service-detail'>
                        <Link to='/' className='service-back'>&larr; Menu Principal </Link>
                        <img className='service-logo' src={instructoradoLogo} alt=""/>
                        <h1>
                            Formacion en Yoga avalada por IADB.
                        </h1>
                        <p>Instituto Argentino de Descodificacion Biologica.</p>

                        <div className="service-boxes-container">
                            <div className='service-boxes'>
                                <div className="service-box-1">
                                    <div className='service-box-selector'>
                                        <img src={moreLogo} alt=""/>
                                        <h3>Yoga</h3>
                                    </div>
                                </div>
                                <div className="service-box-2">
                                    <div className='service-box-selector'>
                                        <img src={moreLogo} alt=""/>
                                        <h3>Chi Kung</h3>
                                    </div>
                                </div>
                                <div className="service-box-3">
                                    <div className='service-box-selector'>
                                        <img src={moreLogo} alt=""/>
                                        <h3>Meditacion Zen</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p>En este curso que dura un año recorreras el camino del Yoga integrado a la Medicina China y
                            la Biodescodificacion.
                        </p>
                        <br/>
                        <p>También aprenderás y entrenaras técnicas de Meditación provenientes del Zen. Finalmente
                            aprenderás a dar una clase completa con este efectivo y novedoso Método Hansa.
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

export default Instructorado