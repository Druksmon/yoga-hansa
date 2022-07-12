import './Home.css'
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Services from "../../components/Services/Services";
import Testimonios from "../../components/Testimonios/Testimonios";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";


const Home = () => {
    return (
        <>
            <Header title='YOGA' span='HANSA' sub='Comprende, Sana y Despiertate.'
                    text='En Yoga Hansa te brindamos  herramientas unicas y el acompañamiento personalizado que estas buscando para tu camino de Evolución Espiritual.'
                    backgroud='header-background'/>
            <Services/>
            <Testimonios/>
            <AboutMe/>
            <Footer/>
        </>
    )

}

export default Home