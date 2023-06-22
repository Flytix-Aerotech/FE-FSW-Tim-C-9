const formatRupiah = (value) => {
  return Intl.NumberFormat("id-ID", {
    currency: "IDR",
  }).format(value);
};
export default formatRupiah;
