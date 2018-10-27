const twoDigits = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

export const formatDate = (date) => {
  const adjustedTime = new Date(date * 1000);
  const year = adjustedTime.getFullYear()
  const month = twoDigits(adjustedTime.getMonth());
  const day = twoDigits(adjustedTime.getDate());

  return `${year}-${month}-${day}`
}
