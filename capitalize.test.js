import capitalize from "./capitalize"

test("string return is capitalized", () => {
  expect(capitalize("word")).toBe("Word")
})