import React from 'react';
import CardMini from '../../components/CardMini';
import Modal from '../../components/Modal';

const Category = ({ category, articles}) => {
  return (
    <div className='container mt-3 pb-3 pb-md-5'>
        <div className='row g-2'>
            {articles.map((article, index)=>{
                return (
                        <div key={index}  className='col-6 col-md-4 col-lg-3' >
                            <CardMini category={category} article={article} idmodal={index}/>
                            <Modal idmodal={index} article={article}/>
                        </div>
                );
            })}
        </div>
    </div>
  )
}

export default Category