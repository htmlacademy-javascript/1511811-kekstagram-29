
const countsTimeMeet = (workDayStart, workDayEnd, meetingStart, duration) => {

  const convertDate = (dateStr) => {
    const [hours, minutes] = dateStr.split(':');
    const convertedDate = new Date();
    convertedDate.setUTCHours(hours);
    convertedDate.setUTCMinutes(minutes);
    convertedDate.setSeconds(0);
    return convertedDate;
  };

  const workDay = convertDate(workDayEnd).getTime();
  const meetingEnd = convertDate(meetingStart).getTime() + (duration * 60000);
  const outrunMeet = convertDate(workDayStart).getTime() <= convertDate(meetingStart).getTime();

  if (workDay >= meetingEnd && outrunMeet) {
    return true;
  } {
    return false;
  }
};
countsTimeMeet('14:00', '17:30', '08:0', 90);

