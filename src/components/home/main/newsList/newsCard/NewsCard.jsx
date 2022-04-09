import React from 'react'
import './news_card.css'

const NewsCard = ({ newsData })=> {

    const { display_date,  headlines, promo_items } = newsData;
    const imageSrc = promo_items.basic.url
    const title = headlines.basic
    
  return (

      <>

        <div className='card'>
            
                <div className="image">
                    <img src={  imageSrc } />
                </div>
                <div className="title">{ title }</div>
                <div className="date">{ display_date }</div>
        </div>    
      </>  
  )
}

export default NewsCard