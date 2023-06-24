const formatDate = (value) => {
  const date = new Date(value);
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const format = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  return format;
};
export default formatDate;
