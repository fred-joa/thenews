import React from 'react'
import { maxWords } from '../util/functions';
import image from '../assets/react.svg'

const Card = ({lengthWords, category, article, idmodal}) => {
  return (
    <div className='card' style={{width:"100%", height:"100%"}}>
        <img className='card-img-top card-img' style={{ objectFit:"cover"}} src={article.urlImage? article.urlImage:image}/>
        <div className='card-body'>
            <h4 className='card-title'>{article.title}</h4>
            <p className='card-text'>{maxWords(article.description, lengthWords )} {(article.description.length > lengthWords)? <span style={{fontWeight:500, color:"blue", fontSize:"14px", cursor:"pointer"}} data-bs-toggle="modal" data-bs-target={`#${idmodal}`} > Read more.</span>:""}</p>
            <p className='card-text text-muted small-text'>{article.publishedAt}</p>
        </div>

    </div>
  )
}

export default Card