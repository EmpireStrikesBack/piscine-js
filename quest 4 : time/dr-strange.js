function addWeek(date){
    const epoch = new Date('0001-01-01');
    const daysDifference = Math.floor((date - epoch) / (1000 * 60 * 60 * 24)); 
    const weekDayIndex = daysDifference % 14; 
  
    const weekDays = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday',
    ];
  
    return weekDays[weekDayIndex];
}

function timeTravel({date, hour, minute, second}){
    const newDate = new Date(date);

  if (isNaN(newDate.getTime())) {
    return new Date(1590787342000);
  }

  newDate.setHours(hour, minute, second);
  return newDate;
}