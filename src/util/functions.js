import {months, weekday, countries} from './data';

//Current Date
export const getCurrentDate = ()=>{
    const newDate = new Date();
    const month = months[newDate.getMonth()];
    const day = weekday[newDate.getDay()];
    const date = newDate.getDate();
    const year = newDate.getFullYear();
    return day + ", "+ date +" "+month +" "+ year;
  }

  //Get Country
  export const getCountry = (symb)=>{
    console.log(symb);
    let listCountries = [...countries];
    let start = 0;
    let end = listCountries.length - 1;
    const target = symb// code alpha-2
    return searchCountry(listCountries,start,end, target);
}
//Search Binary (recursive)
function searchCountry(listCountries, start, end, target){
    if(start > end){
        return {code:"",country:""};
    }
    let middleIndex = Math.floor((start + end) / 2);
    if(listCountries[middleIndex].code === target){
        return listCountries[middleIndex]; 
    }
    if(listCountries[middleIndex].code > target){
        return searchCountry(listCountries, start, middleIndex - 1, target)
    }else{
        return searchCountry(listCountries, middleIndex + 1, end, target);
    }
}

//Slice the max of words
export function  maxWords(words, lengthWords){
    let count = 0;
    let letters = 200;
    let result = "";
    if(words !== null){
        while(words.length > lengthWords){
            if(words[lengthWords] === " "){
                result = words.slice(0, lengthWords);
                return result;
            }
            letters++;
        }
    }
    else{return ""}
    
    return words;
}

export function getDate(str){
    const fullDate = new Date(str);
    const date = fullDate.getDate();
    const month = fullDate.getMonth();
    const year = fullDate.getFullYear();
    const hours = fullDate.getHours() < 10 || fullDate.getHours() === 0? "0" + fullDate.getHours(): fullDate.getHours();
    const mints =fullDate.getMinutes() < 10 || fullDate.getMinutes() === 0? "0" + fullDate.getMinutes(): fullDate.getMinutes();

    return date + "/" + month +"/"+year +" " + hours +":"+ mints;
}
