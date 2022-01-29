import axios from 'axios';
import React, { useState, useEffect } from 'react';
import User from './item';

function Foydalanuvchilar() {

  const [user, setUser] = useState([])

  async function db() {
    await axios.get('https://suvzana.herokuapp.com/suv')
      .then(malumot => {
        setUser(malumot.data)
      })
      .catch(e => console.log(e.data.message))
  }

  useEffect(() => {
    db()
  }, [user])


  return <div className='container text-center'>
    <h1 className="display-2">Foydalanuvchilar <a href="/" className='nav-link'>Bosh sahifa</a></h1>

    <ul className='list-group text-start'>
      {
        user.map((item, tartib) => {
          return <User tartib={tartib} key={item._id} id={item._id} phone={item.phone} name={item.name} />
        })
      }

    </ul>

  </div>;
}

export default Foydalanuvchilar;
