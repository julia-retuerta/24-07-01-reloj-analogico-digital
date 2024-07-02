// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// Digital clock

const digitalClockHoursElement = document.getElementById('digital-clock-hours');
const digitalClockMinutesElement = document.getElementById('digital-clock-minutes');
const digitalClockWeekDayElement = document.getElementById('digital-clock-week-day');
const digitalClockDayElement = document.getElementById('digital-clock-day');
const digitalClockMonthElement = document.getElementById('digital-clock-month');
const digitalClockYearElement = document.getElementById('digital-clock-year');

setIntervalHour(() => {}, 3600000);
