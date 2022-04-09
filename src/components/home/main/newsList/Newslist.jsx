import React from 'react'
import NewsCard  from './newsCard/NewsCard.jsx'
import './news_list.css'

const Newslist = ({news})=> {

  const newsSubtypeFilter = news.filter( x => x.subtype == 7)

  return (
    
    <>
  
      <div className='news_card_container'>
          {
              newsSubtypeFilter.map(newsData => <NewsCard newsData = { newsData } key={newsData._id }/>) 
          }
      </div>    
    </>
    
  )
}

export default Newslist