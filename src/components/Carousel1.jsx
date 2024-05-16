import React from 'react';
import Modal from './Modal';

const Carousel1 = ({articles}) => {
  return (
    <div id='carouselNews' className="carousel slide" >
        <div className='carousel-inner ' >
            {articles.map((article, index)=>{
            return (
                <div className={`carousel-item ${index === 0? "active":""}`} key={index} data-bs-toggle="modal" data-bs-target={`#${index}`}>
                    <img className='d-block opacity-50 m-auto img-carousel' src={article.urlImage} alt=''/>
                    <div className='carousel-caption d-block'>
                        <h5 className='m-auto title-carousel'>{article.title}</h5>
                    </div>
                    <Modal idmodal={index} article={article}/>
                </div>
                )
            })
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselNews" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselNews" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
  </div>
  )
}

export default Carousel1