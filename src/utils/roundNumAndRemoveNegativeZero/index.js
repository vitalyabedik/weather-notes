const roundNumAndRemoveNegativeZero = (number) =>
  number.toFixed().replace("-0", "0");

export default roundNumAndRemoveNegativeZero;
