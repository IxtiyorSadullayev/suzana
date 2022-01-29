import React from "react";
import Inputli from "./Inputli";


function Suv (){
    return (
        <div>
            <div className="container text-center">
                <h1 className="display-2">Zam zam suvi</h1>
                <div className="container linklar">
                    <a href="/foydalanuvchilar" className="display-6 ali shadow-lg p-5 rounded">Foydalanuvchilar</a>
                    <a href="/add" className="display-6 ali shadow-lg p-5 rounded" >Yangi ma`lumot qo`shish</a>
                </div>
               <Inputli />
            </div>
        </div>
    )
}

export default Suv;