import './Header.css'
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import { motion} from "framer-motion"


const Header = ({backgroud}) => {
    return (

        <header id='header' className={backgroud}>
            <div className="header-container">
                <motion.div  className="header-box">
                    <motion.h1 initial={{ opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}
                               transition={{duration: 1.2}} >YOGA <br/> <motion.span initial={{ opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}
                                                                                     transition={{duration: 1.2}} exit={{x: 1000}}>HANSA</motion.span></motion.h1>
                    <motion.h3 initial={{ opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}
                               transition={{duration: 2.3}} exit={{x: 1000}}>Comprende, Sana y Despiertate.</motion.h3>
                   <WhatsAppButton/>
                    <motion.p initial={{ opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}
                              transition={{duration: 2.3}} exit={{x: 1000}}>En Yoga Hansa te brindamos  herramientas unicas y el acompañamiento personalizado que estas buscando para tu camino de Evolución Espiritual.</motion.p>
                </motion.div>
            </div>

        </header>
    )

}

export default Header