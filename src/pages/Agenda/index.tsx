import React, { useState } from 'react';
import moment from 'moment';

function Calendar() {
  const [date, setDate] = useState(moment());

  const firstDayOfMonth = () => moment(date).startOf('month').format('d');
  const daysInMonth = () => moment(date).daysInMonth();
  const currentMonth = () => moment(date).format('MMMM');
  const currentYear = () => moment(date).format('YYYY');

  const prevMonth = () => setDate(moment(date).subtract(1, 'month'));
  const nextMonth = () => setDate(moment(date).add(1, 'month'));

  const weekdays = moment.weekdaysShort().map(day => (
    <td key={day} className="week-day">
      {day}
    </td>
  ));

  const blanks = [];
  for (let i = 0; i < Number(firstDayOfMonth()); i++) {
    blanks.push(
      <td key={i * 100} className="empty-slot">
        {''}
      </td>
    );
  }

  const daysInMonthArray = [];
  for (let d = 1; d <= daysInMonth(); d++) {
    const className = d === moment().date() && date.isSame(moment(), 'month') ? 'day current-day' : 'day';
    daysInMonthArray.push(
      <td key={d} className={className}>
        {d}
      </td>
    );
  }

  const totalSlots = [...blanks, ...daysInMonthArray];
  const rows:any[] = [];
  let cells :any[]= [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  const calendarDays = rows.map((day, i) => <tr key={i}>{day}</tr>);

  return (
    <div className="calendar-container">
      <table className="calendar">
        <thead>
          <tr className="calendar-header">
            <td>
              <span className="prev-month" onClick={prevMonth}>
                &#10094;
              </span>
              <span className="current-month">
                {currentMonth()} {currentYear()}
              </span>
              <span className="next-month" onClick={nextMonth}>
                &#10095;
              </span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>{weekdays}</tr>
          {calendarDays}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;