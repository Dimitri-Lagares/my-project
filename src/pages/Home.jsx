import React, { useState, useEffect, useContext  } from 'react';
import { AuthContext } from '../auth/AuthContext';

const Home = () => {
  const user = useContext(AuthContext)
  console.log(user);
  return (
    <div>hey what's going up' <span className='text-lime-800 font-bold text-2xl'>{user.user}</span> this is the Home</div>
  )
}

export default Home