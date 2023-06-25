const years = document.querySelector("h2#date");

function getYears() {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth()+1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  years.innerText = `${year}년${month}월${day}일`;
}

getYears();
setInterval(getYears, 1000);