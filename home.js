let user = document.getElementById('name')
let store= localStorage.getItem('name')
let container=document.querySelector(".container")


user.innerText=`Welcome ${store}`
async function getData(){
    let res=await fetch("http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2")
    let datas= await res.json()
    let alldata=datas.data[0]
    let time=alldata.timings
    let d=alldata.readable
    console.log(d);
    let list =document.createElement("p")
    list.classList.add("text-white")
    list.innerText=" Fajr :"+time.Fajr+" Dhuhr: "+time.Dhuhr+" Asr: "+time.Asr+" Maghrib: "+time.Maghrib +" Isha: "+ time.Isha

    container.append(list)
    console.log(list);


}
getData()

async function getData2(){
    let res=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=dd5556c2a6951da94bb51e47913bb77a")
    let datas= await res.json()
    console.log(datas);
    let list =document.createElement("p")
    list.classList.add("text-white")
    list.innerText="City :"+datas.name+" temperature: "+datas.main.temp +" Longitude : "+datas.coord.lon +" Latitude :"+datas.coord.lat+" humidity: "+datas.main.humidity
    container.append(list)
    console.log(list);


}
getData2()