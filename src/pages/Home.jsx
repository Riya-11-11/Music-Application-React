import React, { useContext } from 'react'
import { AuthContextData } from '../context/AuthContext'

const Home = () => {

    const data = useContext(AuthContextData);
    console.log(data);
    
  return (
    <div>Home</div>
  )
}

export default Home