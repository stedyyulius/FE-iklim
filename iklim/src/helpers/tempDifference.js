export const tempDifference = (max, min) => {
  const temp = max - min;
  return Math.round(temp * 100) / 100;
}
