import React, { useState, useEffect } from 'react';
import './home.css'
import Header from '../header/Header.jsx'
import Main from '../main/Main.jsx'
import Footer from '../footer/Footer.jsx'
import Newslist from '../newsList/Newslist.jsx'

const getProducts = (()=>{})

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

    })

  return (
    <>
      <Header/>
      <Main/>
      <Newslist/>
      <Footer/>
    </>
    
    
  )
}
export default Home;