import axios from 'axios';
import React, { useEffect, useState } from 'react';

function User({ id, name, phone, tartib }) {

    const [loading, setLoading] = useState(false)

    async function remove(id) {
        setLoading(true)
        await axios.delete(`https://suvzana.herokuapp.com/suv/${id}`)
            .then(malumot => {
                setLoading(false)
                console.log(malumot)
            })
            .catch(e => {
                setLoading(false)
                console.log(e.data.message)
            })
    }

    useEffect(() => { }, [])
    return (
        <li className="list-group-item user_item shadow-sm" >
            <form action="" className='form-control list-group-item user_item shadow-sm'>
                <div className='son'>{tartib + 1}</div>
                <div className='user_name'>{name} + {phone}</div>
                <div className='amal'>
                    <button className='btn btn-outline-secondary mx-2'>Show</button>
                    <button type='button' className='btn btn-outline-danger   ' onClick={() => remove(id)} >
                       {loading && <div className="spinner-border text-light" role="status">
                           <span className="visually-hidden">Loading...</span>
                       </div>}
                        Delete
                    </button>
                </div>
            </form>
        </li>
    )
}

export default User;
