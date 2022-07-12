import './AboutMe.css'
import profile from '../assets/profile-1.png'
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";


const AboutMe = () => {
    return (

        <div className="about-container">
            <h1>SOBRE MI</h1>
            <div className="about-selector">

                <div className="about-box">
                    <div className="about-info">
                        <img className='about-profile-picture' src={profile} alt=""/>
                        <div>
                            <h3>XIMENA PISSACO</h3>
                            <h6>Creadora de Yoga Hansa</h6>
                            <p>
                                Llevo mas de <span>8 años</span> formando personas con el método Hansa®, personas que
                                hoy en día son profesionales y multiplican esta manera
                                de <span>despertar y sanar.</span> <br/>
                            </p>
                            <p>  A su vez, brindo herramientas tanto en consultorio como en talleres para que puedas
                                seguir tu camino sin dependencia. </p>
                            <p>   <span> Me apasiona aprender y enseñar.</span> </p>
                            <p>
                                Hatha Yoga, Asthanga Yoga, Chi Kung, Meditacion Zen, Biodescodificacion, Constelaciones
                                Familiares han sido parte de mi recorrido y del camino que te invito a recorrer juntos.
                            </p>
                            <WhatsAppButton/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe