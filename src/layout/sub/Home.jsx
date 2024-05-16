import React from 'react';
import Card from '../../components/Card';
import CardMini from '../../components/CardMini';
import CardLong from '../../components/CardLong';
import '../../util/home.css';
import CardImg from '../../components/CardImg';
import Carousel1 from '../../components/Carousel1';
import  Modal  from '../../components/Modal';



const Home = ({articles}) => {
  const articles2 = articles.slice(4,7);
  const section3 = articles.slice(7,10);
  const section4 = articles.slice(10, articles.length -1 );

  return (
    <>
     {/*-- section # 1 --*/}
    <section className='container mt-2 pb-3 pb-md-5'>
      <div className='row' >
        <div className='col-lg-6 col-12 mb-4 mb-lg-0'>
          <Card lengthWords="200" category={"Technology"} article={articles[0]} idmodal={articles[0].id}/>
          <Modal article={articles[0]} idmodal={articles[0].id}/>
        </div>
        <div className='col-lg-6 col-12'>
          <div className='mb-4'>
            <CardLong category={"Technology"} article={articles[1]} idmodal={articles[1].id}/>
            <Modal article={articles[1]} idmodal={articles[1].id}/>
          </div>
          <div className='row g-1 g-md-4' >
            <div className='col-6 '>
              <CardMini category={"Technology"} article={articles[2]} idmodal={articles[2].id}/>
              <Modal article={articles[2]} idmodal={articles[2].id}/>
            </div>
            <div className='col-6 '>
              <CardMini category={"Technology"} article={articles[3]} idmodal={articles[3].id}/>
              <Modal article={articles[3]} idmodal={articles[3].id}/>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/*-- section #  2--*/}
    <section className='bg-dark '>smart watch s9-ultra
        <div className="container pb-5">
        <h4 className='text-center text-white pb-4 m-0'>THE NEWS</h4>
          <Carousel1 articles={articles2}/>
        </div>
    </section>
     {/*-- section # 3--*/}
    <section className='container py-3 py-md-5'>
      <div className=''>
        <div className='row g-1 gy-2 g-md-4'>
          <div className='col-12 col-lg-6'>
            <CardImg article={section3[0]} idmodal={section3[0].id}/>
            <Modal article={section3[0]} idmodal={section3[0].id}/>
          </div>
          <div className='col-12 col-lg-6' >
            <div className='row g-1 g-md-4'  >
              <div className='col-6 '  >
                <CardMini category={"Technology"} article={section3[1]} idmodal={section3[1].id} />
                <Modal article={section3[1]} idmodal={section3[1].id}/>
              </div>
              <div className='col-6' >
                <CardMini category={"Technology"} article={section3[2]} idmodal={section3[2].id}/>
                <Modal article={section3[2]} idmodal={section3[2].id}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*section news 4*/}
    <section className='bg-s4 py-3 py-md-5'>
      <div className="container">
        <div className='row g-1 g-md-2 g-lg-3'>
          {
            section4.map((item, index)=>{
              return (
                  <div key={index} className='col-6 col-md-4 col-lg-3'>
                    <CardMini  category={"Technology"} article={item} idmodal={item.id}/>
                    <Modal idmodal={item.id} article={item} />
                    {console.log("Modal Home")}
                  </div> 
            )
            })

          }
        </div>
      </div>

    </section>

    </>
  )
}

export default Home

// width:"100%",height:"400px", style={{width:"80%", margin:"auto"}}