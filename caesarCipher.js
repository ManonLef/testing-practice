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

export default function caesarCipher(string, shift) {
  let encrypted = "";
  // iterate through string to find the value of each letter
  for (let key of string) {
    // check if key is uppercase
    let upperCase = false;
    // convert to lowercase if uppercase
    if (checkUppercase(key)) {
      upperCase = true;
      key = key.toLowerCase()
    }
    let valuePlain = plain[key];
    let valueCipher = validKey(valuePlain + shift);
    let keyCipher = findKey(plain, valueCipher);
    // convert back to uppercase if needed
    if (upperCase) {
      keyCipher = keyCipher.toUpperCase();
    }
    if (keyCipher === undefined) encrypted += key
    else encrypted += keyCipher;
  }
  return encrypted;
}

caesarCipher("Netherlands", 5)

function findKey(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function checkUppercase(string) {
  return /[A-Z]/.test(string);
}

function validKey(key) {
  if (key > 25) {
    return key - 26;
  }
  return key;
}
