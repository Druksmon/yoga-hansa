import './Testimonios.css'
import profile1 from '../assets/profile-1.png'
import profile2 from '../assets/profile-2.png'
import profile3 from '../assets/profile-3.png'
import profile4 from '../assets/profile-4.png'

const Testimonios = () => {
    return (

        <div className="testimonio-container">
            <div className="testimonio-selector">
                <h1>TESTIMONIOS</h1>
                <div className="testimonio-boxes">

                    <div className="testimonio-card">
                        <div className="testimonio-card-info">
                            <div className="profile-card">
                                <img src={profile4} alt=""/>
                                <div>
                                    <h6>Maria Laura</h6>
                                    <p>Clases virtuales de Yoga y Chi Kung</p>
                                </div>
                            </div>
                            <p>Tuve la gracia de conocer las clases de Ximena cuando comenzó la pandemia. Vivo en Buenos
                                Aires y tomo las prácticas por Zoom, pero ¡ojo! se sienten como presenciales. Tanto Yoga
                                como Chi-Qung y los Talleres de los Elementos me ayudaron a conocerme más y poder
                                equilibrarme para atravesar estos tiempos difíciles que nos tocan. </p>
                        </div>
                    </div>
                    <div className="testimonio-card">
                        <div className="testimonio-card-info">
                            <div className="profile-card">
                                <img src={profile2} alt=""/>
                                <div>
                                    <h6>Ana D'ambrosio</h6>
                                    <p>Instructorado de Yoga</p>
                                </div>
                            </div>
                            <p>Para mi el instructorado fue una profunda transformación, un antes y un después... un
                                cambio de paradigma.
                                Tener las herramientas para mantenerme en equilibrio a través del yoga y el zazen ha
                                sido una adquisición invaluable.</p>
                        </div>
                    </div>

                    <div className="testimonio-card">
                        <div className="testimonio-card-info">
                            <div className="profile-card">
                                <img src={profile3} alt=""/>
                                <div>
                                    <h6>Alicia Bravino</h6>
                                    <p>Consultorio</p>
                                </div>
                            </div>
                            <p>El realizar biodescodificacion y movimiento sistémico me permitió contextualizar y
                                entender el "problema", motivo de consulta y cambiar mi mirada respecto al mismo.
                                Me brindó tranquilidad ya que pude conectar la problemática con las emociones y
                                sentimientos que me habían provocado angustia.
                            </p>
                        </div>
                    </div>
                    <div className="testimonio-card">
                        <div className="testimonio-card-info">
                            <div className="profile-card">
                                <img src={profile1} alt=""/>
                                <div>
                                    <h6>Ailin Caceres</h6>
                                    <p>Talleres</p>
                                </div>
                            </div>
                            <p>En los talleres pude ponerme en contacto con sentimientos que entraban profundamente en
                                mi familia y que no lograba llegar a entender, la ayuda del grupo es revitalizante.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Testimonios