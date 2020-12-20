function getArrayOfNumerals(number) {
  if (typeof number !== "number") {
    return false;
  }
  return String(Math.abs(number)).split("").map(Number);
}

module.exports = getArrayOfNumerals;
