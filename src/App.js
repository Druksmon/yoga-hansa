import './App.css';
import Home from "./screens/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Nav from "./components/Nav/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Instructorado from "./screens/Services/Instructorado/Instructorado";
import Talleres from "./screens/Services/Talleres/Talleres";
import Clases from "./screens/Services/Clases/Clases";
import Consultorio from "./screens/Services/Consultorio/Consultorio";


function App() {
    return (
        <BrowserRouter>

            <ScrollToTop/>
            <Nav/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/instructorado-yoga' element={<Instructorado/>}/>
                <Route path='/talleres' element={<Talleres/>}/>
                <Route path='/clases' element={<Clases/>}/>
                <Route path='/consultorio' element={<Consultorio/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
