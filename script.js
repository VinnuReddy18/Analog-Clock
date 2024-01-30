//Analog Clock
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

//function to vary the colors according to user
function updateClockColors() {
    const redValue = document.getElementById('redRange').value;
    const greenValue = document.getElementById('greenRange').value;
    const blueValue = document.getElementById('blueRange').value;
    
    document.getElementById('sc').style.setProperty('--clr', `rgb(${redValue}, ${greenValue}, ${blueValue})`);
    document.getElementById('mn').style.setProperty('--clr', `rgb(${redValue}, ${greenValue}, ${blueValue})`);
    document.getElementById('hr').style.setProperty('--clr', `rgb(${redValue}, ${greenValue}, ${blueValue})`);
    document.getElementById('hours').style.setProperty('--clr', `rgb(${redValue}, ${greenValue}, ${blueValue})`);
    document.getElementById('minutes').style.setProperty('--clr', `rgb(${redValue}, ${greenValue}, ${blueValue})`);
    document.getElementById('seconds').style.setProperty('--clr', `rgb(${redValue}, ${greenValue}, ${blueValue})`);
    document.getElementById('ampm').style.setProperty('--clr', `rgb(${redValue}, ${greenValue}, ${blueValue})`);
}

// Update clock colors when RGB ranges change
document.getElementById('redRange').addEventListener('input', updateClockColors);
document.getElementById('greenRange').addEventListener('input', updateClockColors);
document.getElementById('blueRange').addEventListener('input', updateClockColors);

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`; 



    //Digital clock
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    //convert 24hr clock to 12hr clock

    if(h>12){
        h=h-12;
    }

    //add zero before single digit number
//used some basic regex expressions to add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

});