const formatTime = (value) => {
  if (value !== undefined) {
    const split = value.split(":");
    const format = `${split[0]}:${split[1]}`;
    return format;
  } else {
    return value;
  }
};
export default formatTime;
