const pow = require("./pow");

test("Should pow raises x in n power", () => {
  expect(pow(1, 2)).toBe(1);
  expect(pow(2, 3)).toBe(8);
});

test("Should pow return 0 with invalid n", () => {
  expect(pow(1, null)).toBe(0);
});
