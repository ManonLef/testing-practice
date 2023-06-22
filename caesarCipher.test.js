import caesarCipher from "./caesarCipher";

test("single word with shift of 5 returns the encrypted string", () => {
  expect(caesarCipher("hello", 5)).toBe("mjqqt")
})

test("single word with shift of 5 wrapping z to a", () => {
  expect(caesarCipher("lazy", 5)).toBe("qfed")
})

test("single word with shift of 5 keeps casing", () => {
  expect(caesarCipher("Netherlands", 5)).toBe("Sjymjwqfsix")
})

test("sentence with shift of 5 keeps casing", () => {
  expect(caesarCipher("Hi there Manon", 5)).toBe("Mn ymjwj Rfsts")
})

test("sentence with shift of 4 returns the encrypted sentence", () => {
  expect(caesarCipher("defend the east wall of the castle", 4)).toBe("hijirh xli iewx aepp sj xli gewxpi")
})

test("sentence with shift 5 and punctuation returns encrypted sentence with punctuation in place", () => {
  expect(caesarCipher("hello, how are you?", 5)).toBe("mjqqt, mtb fwj dtz?")
})
