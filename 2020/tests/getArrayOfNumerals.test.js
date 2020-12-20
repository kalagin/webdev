const getArrayOfNumerals = require("./getArrayOfNumerals");

test("Should getArrayOfNumerals return array of numbers with valid argument", () => {
  expect(getArrayOfNumerals(1000)).toEqual([1, 0, 0, 0]);
  expect(getArrayOfNumerals(-100)).toEqual([1, 0, 0]);
  expect(getArrayOfNumerals(345)).toEqual([3, 4, 5]);
});

// кейс проверки невалидные значения
test("Should getArrayOfNumerals return false with invalid argument", () => {
  expect(getArrayOfNumerals(null)).toBeFalsy();
  expect(getArrayOfNumerals()).toBeFalsy();
  expect(getArrayOfNumerals("dsdsd")).toBeFalsy();
});
