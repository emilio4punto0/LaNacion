import React from 'react'
import Newslist from './newsList/Newslist.jsx'
import { mainTitlesDataHandler } from '../../tools'
import MainTitles from './newsList/mainTitles/MainTitles.jsx'

const Main = ({news})=> {

  const titlesData = mainTitlesDataHandler(news)

  return (
    <>
        <div className='main'>
          <h1>Acumulado Grilla</h1>
          <div className='main_titles'>
            {
              titlesData.map((tags, index) => index < 10 && <MainTitles TagsLug={"/tema/" + tags.slug } tagsText={ tags.text } key={index + tags.slug.split("tid")[1] }/> )
            }  
          </div>
          <Newslist news={ news } /> 
        </div>
    </>
  )
}

export default Main