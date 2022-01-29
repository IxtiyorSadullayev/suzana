import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify'

function Inputli() {

    let userlar = [];
    const [tel, setTel] = useState('');
    const [name, setName] = useState('');

    async function adddb(foydalanuvchi) {
        await axios.post('https://suvzana.herokuapp.com/suv', foydalanuvchi)
            .then(malumot => {
                console.log(malumot)
            })
            .catch(e => console.log(e.data.message))
    }

    function adduser() {
        if (tel == "" || name == "") {
            alert("Iltimos katakchalarni to`ldiring")
        } else {
            userlar.push({
                tel: tel, name: name
            })
            toast.success("Bu toast degan narsa")
            console.log(userlar)
            setTel("")
            setName("")
            adddb({
                phone:tel,
                name:name
            })
            
        }
    }

    return (
        <div className="container shadow-sm mt-3 p-3">
            <h1 className="display-4">
                Yangi suv oladigan foydalanuvchini qo`shish
            </h1>
            <div className="container form-control my-5 border-sm p-2">
                <input type="number" name='tel' value={tel} onChange={e => setTel(e.target.value)} className="form-control my-5" placeholder="Telefon raqamingizni kiriting misol: 937123822" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} className="form-control my-5" placeholder="Ismini kiriting" />
                <button className="btn btn-outline-success" onClick={adduser} >Foydalanuvchi yaratish</button>
            </div>
        </div>
    )
}

export default Inputli;
