function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${second}`;
}

setInterval(updateClock, 1000);
updateClock();
