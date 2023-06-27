function formatDifferenceTime(startDate, endDate) {
  const [startHours, startMinutes, startSeconds] = startDate.split(":").map(Number);
  const [endHours, endMinutes, endSeconds] = endDate.split(":").map(Number);

  const startDateTime = startHours * 3600 + startMinutes * 60 + startSeconds;
  const endDateTime = endHours * 3600 + endMinutes * 60 + endSeconds;

  const resultTime = endDateTime - startDateTime;

  const hours = Math.floor(resultTime / 3600);
  const temp = resultTime % 3600;
  const minutes = Math.floor(temp / 60);

  return `${hours}h ${minutes}m`;
}

export default formatDifferenceTime;
