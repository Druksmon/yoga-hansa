import './Home.css'
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Services from "../../components/Services/Services";
import Testimonios from "../../components/Testimonios/Testimonios";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion"


const Home = () => {

    const [isLoading, setIsLoading] = useState(true)

    const load = () => {
        setIsLoading(false)
    }

    setTimeout(load, 3000);

    return (<>

        {isLoading
            ?
            (<Loader isLoading={isLoading}/>)
            :
            (<div>
                <Header backgroud='header-background'/>
                <Services/>
                <Testimonios/>
                <AboutMe/>
                <Footer/>
            </div>)}
    </>)

}

export default Home