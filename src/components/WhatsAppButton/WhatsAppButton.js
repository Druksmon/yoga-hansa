import './WhatsAppButton.css'
import logoWhatsapp from '../assets/icons/whatsapp-white.png'
import { motion} from "framer-motion"

const WhatsAppButton = () => {
    return (
        <>
            <motion.a initial={{ opacity: 0, y:50}} animate={{opacity: 1,y:0}}
                      transition={{duration: 0.6}} exit={{x: 1000}} className='whatsapp-button' href="https://wa.me/5493516639232" target="_blank">

                <img className='whatsapp-white-logo' src={logoWhatsapp} alt=""/>
                CONTACTO
              </motion.a>
        </>
    )
}
export default WhatsAppButton