import reverseString from "./reverseString"

test("string input will be output reversed", () => {
  expect(reverseString("word")).toBe("drow")
})