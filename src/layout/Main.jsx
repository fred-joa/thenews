import React, { useEffect, useState } from 'react';
import Home from './sub/Home';
import Category from './sub/Category';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Subscribe from './sub/Subscribe';
import { getDate } from '../util/functions';
import TermConditions from './sub/TermConditions';
import Info from './sub/Info'
import Contact from './sub/Contact';



const Main = ({category}) => {
const [news, setNews] = useState([]);

useEffect(()=>{
  let ignore= false;
  let count = 0;
  //Differents API provider
  

  //fetch(`https://newsdata.io/api/1/news?apikey=pub_41918663c3c3231234471b86d6acc5b057e16&size=10&category=world`)
  fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=c40ac45a838e4e3db604688eb811bea1`)
  .then((res)=>{
        if(res.ok){
          return res.json();
        }else{return "Error to get API news"}
    })
  .then((data)=>{
    if(!ignore){
      console.log(data);
        const articles0 = data.articles.map((item)=>{
          console.log(item);
          count++;
          return {id: count, title: item.title, description: item.description, url:item.url, urlImage:item.urlToImage, publishedAt:getDate(item.publishedAt)};
        });
        const articles = articles0.filter((item)=>{
          return item.description != null && item.urlImage != null
        });
        console.log(articles);
        setNews(articles);
    }
    })
  .catch((err)=>{
      console.log(err);
    });

    return ()=>{ignore=true;}
},[category])

  return (
    <main>
      <Routes>
        {
         (news.length !== 0)? <>
          <Route path='/' element={<Home articles={news}/>}></Route>
          <Route path='/technology' element={<Category category={"News"} articles={news}/>}></Route>
          <Route path='/business' element={<Category category={"News"} articles={news}/>}></Route>
          <Route path='/health' element={<Category category={"News"} articles={news}/>}></Route>
          <Route path='/sports' element={<Category category={"News"} articles={news}/>}></Route>
          <Route path='/entertainment' element={<Category category={"News"} articles={news}/>}></Route>
          <Route path='/terms-and-conditions' element={<TermConditions/>}></Route>
          <Route path='/Info' element={<Info/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
         </> : <Route path='/' element={<p style={{height:"74vh", color:"red"}}>Loading ... {news}</p>}></Route>
        }
        <Route path='/subscribe' element={<Subscribe/>}></Route>
      </Routes>
    </main>
  )
}

export default Main
//<Home articles={articles}/>
//{articles.status === "success"?<Home technology={technology.results}/>:<p>It still loading....</p>}

/**{(!news.length)? <Route path='/' element={<Home articles={news}/>}></Route>: <Route path='/' element={<p>Loading</p>}></Route>  }
        <Route path='/technology' element={<Technology category={"News"} articles={news}/>}></Route> */