import '../Service.css'
import './Talleres.css'
import Footer from "../../../components/Footer/Footer";
import moreLogo from '../../../components/assets/icons/more.png'
import talleresLogo from '../../../components/assets/icons/talleres.png'


import {Link} from "react-router-dom";
import WhatsAppButton from "../../../components/WhatsAppButton/WhatsAppButton";

// const [icon, setIcon] = useState('');

const Talleres = () => {
    return (
        <>


            <div id='header' className="service-container talleres-background">

                <div className="service-selector">

                    <div className='service-detail'>
                        <Link to='/' className='service-back'>&larr; Menu Principal </Link>
                        <img className='service-logo' src={talleresLogo} alt=""/>
                        <h1>
                            Talleres
                        </h1>
                        <p>Las 5 leyes de Hamer y las 4 capas embrionarias.</p>

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
                        <p>Te invito a conocer las 5 leyes de Hamer y las 4 capas embrionarias (fundamento de la
                            Biodescodificacion)
                        </p>
                        <br/>
                        <p>Te guiare con herramientas como la Meditacion y el Movimiento Sistémico y te acompañarte en
                            un viaje de Autoconocimiento y Sanación. <br/>

                            Si eres terapeuta, este curso te brindará recursos exelentes y efectivos para tu trabajo.


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

export default Talleres