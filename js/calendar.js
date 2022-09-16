const calendarDate = document.querySelector('.calendar-date');
const date = new Date();

const CLASS_CLICKED = 'clicked';

function calendarHandle() {
  date.setDate(1);
  const months = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay(); // 요일 인덱스를 구해서 지난 날짜를 보이게하는 트릭
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  document.querySelector('.month').innerText = months[date.getMonth()];
  document.querySelector('.date p').innerText = new Date().toDateString();

  let days = '';

  // 지난달의 마지막 날짜 미리보기
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  // 이번달 일수 계산
  for (let i = 1; i <= lastDay; i++) {
    //현재 날짜 강조 표시
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today item">${i}</div>`;
    } else {
      days += `<div class="item">${i}</div>`;
    }
  }

  // 다음달의 날짜 미리보기
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    calendarDate.innerHTML = days;
  }

  // 달력 날짜 클릭해서 선택
  calendarDate.addEventListener('click', (e) => {
    // 기존 선택일이 존재하는 경우 기존 선택일의 표시형식을 초기화
    if (document.getElementsByClassName(CLASS_CLICKED)[0]) {
      document
        .getElementsByClassName(CLASS_CLICKED)[0]
        .classList.remove(CLASS_CLICKED);
    }
    if (e.target.classList.contains('item')) {
      e.target.classList.add(CLASS_CLICKED);
    }
  });
}
// 버튼 클릭 기능
document.querySelector('.prev-month').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  calendarHandle();
});
document.querySelector('.next-month').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  calendarHandle();
});

calendarHandle();
