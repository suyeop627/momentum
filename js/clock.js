const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

  getClock();
  setInterval(getClock, 1000);

  const timeLeft = document.getElementById("timeLeft")

  let tommorow;
	tommorow = new Date();
	tommorow.setHours(0);
	tommorow.setMinutes(0);
	tommorow.setSeconds(0);
	tommorow.setDate(tommorow.getDate() + 1);

  function getTimeLeft(){
  const today = new Date();
  const gap = Math.round((tommorow - today.getTime()) / 1000);
  const day = Math.floor(gap / 86400);
  const hours = Math.floor((gap - day * 86400) / 3600 % 3600);
  const minutes = Math.floor((gap - hours * 3600) / 60 % 60);
  const seconds = Math.floor((gap - minutes * 60) % 60); 
  timeLeft.innerHTML =`${String(hours).padStart(2,'0')}h ${String(minutes).padStart(2,'0')}m ${String(seconds).padStart(2,'0')}s left today` ;
  }
  
  getTimeLeft();
  setInterval(getTimeLeft, 1000);
