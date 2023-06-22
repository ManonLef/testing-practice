export default function analyzeArray(array) {
  const object = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };
  console.log(object);
  return object;
}

function average(array) {
  if (array.length === 0) return null;
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return sum / array.length;
}

function min(array) {
  if (array.length === 0) return null;
  const minimum = array.reduce((accumulator, currentValue) =>
    currentValue <= accumulator ? currentValue : accumulator
  );
  return minimum;
}

function max(array) {
  if (array.length === 0) return null;
  const minimum = array.reduce((accumulator, currentValue) =>
    currentValue >= accumulator ? currentValue : accumulator
  );
  return minimum;
}
