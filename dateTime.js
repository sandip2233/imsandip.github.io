`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toDateString();
  const dateString1 = new Date().toLocaleTimeString();
  const formattedString = dateString.replace(", ", " - ");
  const formattedString1 = dateString1.replace(", ", " - ");
  timeDisplay.textContent = formattedString+" | "+formattedString1;

}
  setInterval(refreshTime, 1000);