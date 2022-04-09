import React from 'react'
import './main_titles.css'

const MainTitles = ({TagsLug, tagsText})=> {

  return (
    <>
        {        
        <a href={"/tema/" + TagsLug }> { tagsText } </a>    
        }
    </>
  )
}

export default MainTitles