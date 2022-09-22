const clock = document.querySelector('h2#clock');
const today = document.querySelector('#clock-date');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}`;

  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const month = date.getMonth();
  const days = date.getDate();
  today.innerText = `${month + 1}월 ${days}일 ${week[date.getDay()]}요일`;
}
getClock();
setInterval(getClock, 1000);
