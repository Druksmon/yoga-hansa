import './WhatsAppButton.css'
import logoWhatsapp from '../assets/icons/whatsapp-white.png'

const WhatsAppButton = () => {
    return (
        <>
            <a className='whatsapp-button' href="https://wa.me/5493516639232" target="_blank">

                <img className='whatsapp-white-logo' src={logoWhatsapp} alt=""/>
                CONTACTO
              </a>
        </>
    )
}
export default WhatsAppButton