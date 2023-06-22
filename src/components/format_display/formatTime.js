const formatTime = (value) => {
  const split = value.split(":");
  const format = `${split[0]}:${split[1]}`;
  return format;
};
export default formatTime;
