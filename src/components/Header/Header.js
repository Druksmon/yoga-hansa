import './Header.css'
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";



const Header = ({title, span, sub, text, backgroud}) => {
    return (

        <header id='header' className={backgroud}>
            <div className="header-container">
                <div className="header-box">
                    <h1>{title} <br/> <span>{span}</span></h1>
                    <h3>{sub}</h3>
                   <WhatsAppButton/>
                    <p>{text}</p>
                </div>
            </div>

        </header>
    )

}

export default Header