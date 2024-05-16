import React from 'react'

const CardImg = ({article, idmodal}) => {
  return (
    <div className='position-relative' data-bs-toggle="modal" data-bs-target={`#${idmodal}`}>
        <img className='w-100' src={article.urlImage}/>
        <div className='w-100 position-absolute  bottom-0 gradient-bottom' style={{height:"50%"}}></div>
        <h5 className='position-absolute bottom-0 start-50 translate-middle-x text-light text-center'>{article.title}</h5>
    </div>
)
}

export default CardImg