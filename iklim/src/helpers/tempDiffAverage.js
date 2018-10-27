import { tempDifference } from './tempDifference';

export const tempDiffAverage = (data) => {
  let average = 0;
  for (let i = 0; i < data.length; i++) {
    average += tempDifference(data[i].main.temp_max, data[i].main.temp_min);
  }
  return Math.round(average / data.length * 100) / 100 || 0;
}
