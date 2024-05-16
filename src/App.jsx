import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './layout/Navbar';
import Header  from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import './App.css'
import { getCountry } from './util/functions';

function App() {
  const [positions, setPositions]= useState({latitude:0, longitude:0});
  const [country, setCountry] = useState({code:null, name:null});
  const [weather, setWeather] = useState({temp:null, tempMin:null, tempMax:null, icon:null })
  const [category, setCategory] = useState("general");

  //GET GEOLOCATION
  useEffect(()=>{
    if(navigator.geolocation){
      //Note the ignore variable which is initialized to false, and is set to true during cleanup. 
      //This ensures your code doesn’t suffer from “race conditions”
      let ignore = false;
      console.log("Inside useeffect hook geolocation");
      navigator.geolocation.getCurrentPosition((position)=>{
        if(!ignore){
          setPositions({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        }
        return ()=>{ ignore=true;}//
      })
    }
    else{ console.log("GPS NO Available") }
  },[])

  //GET CURRENT WEATHER y POSITIONs
  useEffect(()=>{
    console.log("Weather");
    //Note the ignore variable which is initialized to false, and is set to true during cleanup. 
      //This ensures your code doesn’t suffer from “race conditions”
    let ignore = false;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${positions.latitude}&lon=${positions.longitude}&units=metric&appid=30f1d7723f3b62294499ef2ee8c14485`
    /* let url = `https://api.openweathermap.org/data/2.5/weather?lat=${positions.latitude}&lon=${positions.longitude}&appid=30f1d7723f3b62294499ef2ee8c14485`; */
    fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        if(!ignore){
          console.log(data);
          setCountry(getCountry(data.sys.country));
          setWeather({temp: Math.floor(data.main.temp), tempMin:Math.floor(data.main.temp_min), tempMax:Math.floor(data.main.temp_max), icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` });  
        }
        })
      .catch((err)=>{
        console.log(err);
      });
      return ()=>{ignore=true;}

  },[positions])


  return (
    <>
      <Header country={country} {...weather}/>
      <Navbar setCategory={setCategory}/>
      <Main category={category}/>
      <Footer setCategory={setCategory}/>
    </>
  )
}

export default App
