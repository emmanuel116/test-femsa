const formatNumbers = (number: any, decimales = 0) => {
  const newNumber = parseFloat(number).toFixed(decimales);

  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1,";
  return newNumber.toString().replace(exp, rep);
};

export default formatNumbers;
