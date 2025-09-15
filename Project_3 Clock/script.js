console.log("hello")
const clockPoint = document.getElementById('time');
console.log(clockPoint)

const date = new Date();
console.log(date.toLocaleTimeString())

setInterval(function(){
    const date = new Date();
    console.log(date.toLocaleTimeString())


    clockPoint.innerText = date.toLocaleTimeString();
}, 1000)