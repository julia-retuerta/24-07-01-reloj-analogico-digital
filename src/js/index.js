// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// OBJETO DATE

// const date = new Date();
// console.log(date.getDay());

// TIMERS

// setInterval(() => {
//   console.log('hola');
// }, 2000);

// setInterval(() => {
//   const date = new Date();
//   console.log(date.getSeconds());
// }, 1000);

// RELOJ DIGITAL Y RELOJ ANALÓGICO

const digitalClockHoursElement = document.getElementById('digital-clock-hours');
const digitalClockMinutesElement = document.getElementById('digital-clock-minutes');
const digitalClockWeekDayElement = document.getElementById('digital-clock-week-day');
const digitalClockDayElement = document.getElementById('digital-clock-day');
const digitalClockMonthElement = document.getElementById('digital-clock-month');
const digitalClockYearElement = document.getElementById('digital-clock-year');

const hourHandElement = document.getElementById('hour-hand');
const minuteHandElement = document.getElementById('minute-hand');
const secondHandElement = document.getElementById('second-hand');

const rootStyles = document.documentElement.style;

const days = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const updateTimeAndDate = () => {
  const date = new Date();

  digitalClockHoursElement.textContent = date.getHours();
  digitalClockMinutesElement.textContent = date.getMinutes();
  digitalClockWeekDayElement.textContent = days[date.getDay()];
  digitalClockDayElement.textContent = date.getDate();
  digitalClockMonthElement.textContent = months[date.getMonth()];
  digitalClockYearElement.textContent = date.getFullYear();

  // 1 vuelta = 360 grados = 60 segundos || 60 minutos || 12 horas
  // 360 grados / 60 segundos o minutos = desplazamiento de 6 grados por segundo o minuto
  // 360 grados / 12 horas = desplazamiento de 30 grados por hora

  const degreesPerHours = date.getHours() * 30;
  rootStyles.setProperty('--hours-rotate', degreesPerHours + 'deg');

  const degreesPerMinutes = date.getMinutes() * 6;
  rootStyles.setProperty('--minutes-rotate', degreesPerMinutes + 'deg');

  const degreesPerSeconds = date.getSeconds() * 6;
  rootStyles.setProperty('--seconds-rotate', degreesPerSeconds + 'deg');
};

updateTimeAndDate();

setInterval(() => {
  updateTimeAndDate();
}, 1000);
