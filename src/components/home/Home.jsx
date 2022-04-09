import React, { useState, useEffect } from 'react';
import './home.css'
import Header from './header/Header.jsx'
import Main from './main/Main.jsx'
import Footer from './footer/Footer.jsx'
import { get } from '../tools'

const Home = () => {
  
    const [news, setNews] = useState([]);

    const newsEndPoint = 'https://api-test-ln.herokuapp.com/articles?_where=subtype===7'

    useEffect(() => {

      const loadNews = (async function () {
      const res = await get(newsEndPoint);
      const addNews = res && setNews(res.articles)

      })()

    }, [])

  return (
    <>
      <Header/>
      <Main news={ news }/>
      
      <Footer/>
    </>
    
    
  )
}
export default Home;