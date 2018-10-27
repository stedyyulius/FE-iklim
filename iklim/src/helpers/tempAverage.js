export const tempAverage = (data) => {
  let average = 0
  for (let i = 0; i < data.length; i++) {
    average += data[i].main.temp;
  }
  return Math.round(average / data.length) || 0;
}
