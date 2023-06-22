const formatDifferenceTime = (arrival, departure) => {
  const date1 = new Date(departure);
  const date2 = new Date(arrival);
  const diffTime = Math.abs(date2 - date1);
  const format = Math.ceil(diffTime / (1000 * 60 * 60));
  return format;
};
export default formatDifferenceTime;
