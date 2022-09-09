import './Services.css'
import clases from '../assets/icons/clases.png'
import consultorio from '../assets/icons/consultorio.png'
import instructorado from '../assets/icons/instructorado.png'
import talleres from '../assets/icons/talleres.png'
import {Link} from "react-router-dom";
import { motion} from "framer-motion"

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-selector">
                <motion.h1 initial={{opacity: 0, y: 50}}
                           whileInView={{opacity: 1, y: 0}}
                           viewport={{once: true}}
                           transition={{duration: 0.8}}>SERVICIOS</motion.h1>
                <motion.div  initial={{opacity: 0, y: 50}}
                             whileInView={{opacity: 1, y: 0}}
                             viewport={{once: true}}
                             transition={{duration: 0.8}} className="services-boxes">
                    <Link to='/instructorado-yoga' className="services-card-1">
                        <img src={instructorado} alt=""/>
                        <h4>INSTRUCTORADO <br/> DE YOGA</h4>
                        <p>Metodo Hansa®</p>
                        <a >Leer mas ></a>
                    </Link>
                    <Link to='/talleres' className="services-card-2">
                        <img src={talleres} alt=""/>
                        <h4>TALLERES</h4>
                        <p>Viaje por los 5 Elementos - Las 5 Leyes de Hamer </p>
                        <a>Leer mas ></a>
                    </Link>
                    <Link to='/clases' className="services-card-3">
                        <img src={clases} alt=""/>
                        <h4>CLASES</h4>
                        <p>Yoga - Chi Kung - Meditacion</p>
                        <a >Leer mas ></a>
                    </Link>
                    <Link to='/consultorio' className="services-card-4">
                        <img src={consultorio} alt=""/>
                        <h4>CONSULTORIO</h4>
                        <p>Biodescodificacion - Constelaciones Familiares</p>
                        <a >Leer mas ></a>
                    </Link>
                </motion.div>
            </div>
        </div>


    )

}

export default Services