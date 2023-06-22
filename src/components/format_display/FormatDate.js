const formatDate = (value) => {
  const date = new Date(value);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const format = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  return format;
};
export default formatDate;
