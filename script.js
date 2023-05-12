const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const currentDate =  new Date();
const currentYear = new Date().getFullYear();

let date= new Date(`June 25 ${currentYear} 00:00:00`);


function updateCountdown(){
    if (currentDate>date){
        date =new Date(`June 25 ${currentYear+1} 00:00:00`);
    }
    const currentTime =  new Date();
    const diff = date-currentTime;

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60

    days.innerText=d;
    hours.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
}
console.log(days)

setInterval(updateCountdown, 1000); 