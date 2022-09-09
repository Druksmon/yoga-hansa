import './AboutMe.css'
import profile from '../assets/profile-1.jpg'
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import { motion} from "framer-motion"

const AboutMe = () => {
    return (

        <div className="about-container">
            {/*<h1>SOBRE MI</h1>*/}
            <div className="about-selector">
                <motion.img initial={{ opacity: 0, x:-100}} whileInView={{opacity: 1,x:0}} viewport={{once: true}}
                             transition={{duration: 1.2}} className='about-profile-picture' src={profile} alt=""/>
                <motion.div initial={{ opacity: 0}} whileInView={{opacity: 1}}  viewport={{once: true}}
                            transition={{duration: 1.2}} className='about-text'>
                    <div>
                        <h3>Ximena Pissaco</h3>
                        <h6>Creadora de Yoga Hansa</h6>
                        <p>
                            Llevo mas de <span>8 años</span> formando personas con el método Hansa®, personas que
                            hoy en día son profesionales y multiplican esta manera
                            de <span>despertar y sanar.</span> <br/>
                        </p>
                        <p> A su vez, brindo herramientas tanto en consultorio como en talleres para que puedas
                            seguir tu camino sin dependencia. </p>
                        <p><span> Me apasiona aprender y enseñar.</span></p>
                        <p>
                            Hatha Yoga, Asthanga Yoga, Chi Kung, Meditacion Zen, Biodescodificacion, Constelaciones
                            Familiares han sido parte de mi recorrido y del camino que te invito a recorrer juntos.
                        </p>
                    </div>
                    <div className="about-buttons">
                        <WhatsAppButton/>
                        <a href="mailto:cordobazen@gmail.com" target="_blank">Email</a>

                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default AboutMe