const censorWord = function (str) {
  return str[0] + "*".repeat(str.length - 2) + str.slice(-1);
};

const CensorEmail = function (email) {
  const arr = email.split("@");
  return censorWord(arr[0]) + "@" + arr[1];
};

export default CensorEmail;
