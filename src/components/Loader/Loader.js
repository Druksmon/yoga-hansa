import './Loader.css'
import hansaYoga from '../assets/LOGO HANSA REDUCIDO.png'
import {AnimatePresence, motion} from "framer-motion"

const Loader = ({isLoading}) => {
    return (


            <motion.div initial={{y: 0}} whileInView={{}}
                        exit={{y: -200}}
                        transition={{duration: 1.2}}
                        className={isLoading ? "loader-container" : "loader-container-off"}>
                <img src={hansaYoga} alt=""/>
            </motion.div>


    )
}

export default Loader