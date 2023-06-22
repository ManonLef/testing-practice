export default function analyzeArray(array) {
  const object = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };
  console.log(object)
  return object;
}

function average(array) {
  const initialValue = 0;
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum / array.length;
}

function min(array) {
  const minimum = array.reduce((accumulator, currentValue) =>
    currentValue <= accumulator ? currentValue : accumulator
  );
  return minimum;
}

function max(array) {
  const minimum = array.reduce((accumulator, currentValue) =>
    currentValue >= accumulator ? currentValue : accumulator
  );
  return minimum;
}
