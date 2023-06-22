import analyzeArray from "./analyzeArray";

test("function doesn't return an array", () => {
  expect(Array.isArray(analyzeArray([1, 8, 3, 4, 2, 6]))).toBeFalsy();
});

test("function returns object", () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe("object");
});

test("function returns average. [1, 8, 3, 4, 2, 6] average should return 4", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("function returns min. [1, 8, 3, 4, 2, 6] min should return 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("function returns max. [1, 8, 3, 4, 2, 6] max should return 8", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("function should return length. [1, 8, 3, 4, 2, 6] length should return 6", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("function returns all object keys correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("function does not give an error when passed an empty array", () => {
  expect(analyzeArray([])).toStrictEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});
