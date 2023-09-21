// addition

const addtion = (a, b) => {
  const res = a + b;
  return res;
};

const substraction = (a, b) => {
  const res = Math.abs(a - b);
  return res;
};

const multiplication = (a, b) => {
  const res = a * b;
  return res;
};

function division(a, b) {
  const res = a / b;
  return res;
}
export default division;
export { addtion, substraction, multiplication };
