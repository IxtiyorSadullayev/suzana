import React from "react";
import {Route, Routes} from 'react-router-dom';
import Foydalanuvchilar from "./Components/Foydalanuvchilar";
import Suv from './Components/Suv/index'
import YangiMalumotlar from "./Components/YangiMalumotlar";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () =>{
    return(
        <div>
            {/* <Suv /> */}
            <Routes>
                <Route path="/" element={<Suv />}/>
                <Route path="/foydalanuvchilar" element={<Foydalanuvchilar />}/>
                <Route path="/add" element={<YangiMalumotlar />}/>
                
            </Routes>
            <ToastContainer />
        </div>
    )
}

export default App;