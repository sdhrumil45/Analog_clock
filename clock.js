

s = document.getElementById("second");
h = document.getElementById("hour");
m = document.getElementById("minute");
var audio = new Audio(`clock-ticking-2.mp3`);



function update(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    

    let hdeg = hour*(360/12);
    let sdeg = second*(360/60);
    let mdeg = minute*(360/60);
    s.style.transform = `rotate(${sdeg}deg)`;
    h.style.transform = `rotate(${hdeg}deg)`;
    m.style.transform = `rotate(${mdeg}deg)`;
    /*audio.play();*/

}


setInterval(update,1000);

console.log(Array.prototype);

