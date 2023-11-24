// let apikey="716835a9dd71439c947101629232710";
// let apiUrl=`http://api.weatherapi.com/v1/current.json?&q={Delhi}&aqi=no
// `

// let a='Bangalore'

// let city= document.getElementById('citybox').value
// console.log(city)

// const wethercheck=()=>{

//   fetch
//   .then((data)={
//     return data.json()
//   })



// }


async function checkwether(){
    let city= document.getElementById('citybox').value
    let icon=document.getElementById('wicon')

    const responce=await fetch(`http://api.weatherapi.com/v1/current.json?key=716835a9dd71439c947101629232710&q=${city}&aqi=no`);
    const data=await responce.json();
    document.getElementById('city').innerHTML=data.location.country
    ;
    document.getElementById('temp').innerHTML= Math.round(data.current.feelslike_c) +"&deg;c";
    document.getElementById('humid').innerHTML=data.current.humidity+" " +"%";
    document.getElementById('wind').innerHTML=data.current.wind_kph +" " +"Kmh";

    if(data.current.condition.text=="Sunny" ){
        document.getElementById('wicon').src='/img/clear.png'

    }else if(data.current.condition.text=="Partly cloudy"){
        document.getElementById('wicon').src='/img/clouds.png'

    }

    document.querySelector(".wether").style.display="block"


    console.log(data)
}

checkwether()




