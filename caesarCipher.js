export default function caesarCipher(string, shift) {
  let encrypted = ""
  // iterate through string to find the value of each letter
  for (let key of string) {
    let valuePlain = plain[key];
    // add the shift factor to the found number
    let valueCipher = valuePlain + shift;
      // find the key that corresponds with the value + shift
    let keyCipher = findKey(plain, valueCipher)
    encrypted += keyCipher
  }
  return encrypted
  // store the new key in a new string
}

function findKey(object, value) {
  return Object.keys(object).find(key => object[key] === value)
}

const plain = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};
