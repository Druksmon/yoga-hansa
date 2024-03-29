import './Nav.css'
import {useState} from "react";
import {Link} from "react-router-dom";
import logo from '../assets/LOGO HANSA REDUCIDO.png'
import {AnimatePresence, motion} from "framer-motion"

const Nav = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        {
            window.scrollY >= 10 ? setColor(true) : setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // return (

    return (
        <>
            <motion.nav  className={color ? 'navigation navigation-scroll' : ' navigation navigation-shadow'}>
                <motion.div initial={{ opacity: 0}} animate={{opacity: 1}}
                            transition={{duration: 0.8}} exit={{x: 1000}} className='navigation-selector'>

                    <Link to='/' className="brand-name">
                        <img src={logo} alt=""/>
                        <div className='brand-name-text'>
                            <h3>Ximena Pissaco</h3>
                            <p>Hansa Yoga</p>
                        </div>

                    </Link>
                    <button
                        className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        className={
                            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                        }
                    >
                        <ul>
                            <li>
                                <a href='#header'>INICIO</a>
                            </li>
                            <li>
                                <a href='#footer'>SOBRE MI</a>
                            </li>
                            <li>
                                <a href="https://wa.me/5493516639232" target="_blank">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </motion.div>

            </motion.nav>
        </>
    )


}

export default Nav