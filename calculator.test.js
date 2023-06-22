import { calculator } from "./calculator";

test("calculator.add 3 + 5 to equal 8", () => {
  expect(calculator.add(3, 5)).toBe(8)
})

test("calculator.subtract 8 - 5 to equal 3", () => {
  expect(calculator.subtract(8, 5)).toBe(3)
})

test("calculator.divide 9 / 3 to equal 3", () => {
  expect(calculator.divide(9, 3)).toBe(3)
})

test("calculator.multiply 9 * 3 to equal 27", () => {
  expect(calculator.multiply(9, 3)).toBe(27)
})