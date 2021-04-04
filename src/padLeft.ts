function padLeft(n: number, str: string) {
  if (n < str.length) {
    return str.toString();
  }
  const numZeroes = n - str.length;
  const arr = Array(numZeroes + 1).join('0') + str;
  return arr;
}

export default padLeft;