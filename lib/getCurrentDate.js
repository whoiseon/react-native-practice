export default function getCurrentDate() {
  const date = new Date();
  const month = date.getMonth();
  const monthName = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const day = date.getDate();

  const dayOfWeek = date.getDay();
  const dayOfWeekName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return `${monthName[month]} ${day}일, ${dayOfWeekName[dayOfWeek]}`;
}
