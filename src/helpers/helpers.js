export const parseDate = (date) => {
  if (!date) return;

  return new Date(date).getFullYear();
};

export const joinArrayBySeparator = (arr, separator = ', ') => {
  if (arr.length === 0) return;

  return arr.join(separator);
};

export const getTimeTitle = (currentValue) => {
  const quotient = Math.floor(currentValue / 60);
  const remainder = currentValue % 60;

  if (currentValue > 60) {
    return `${quotient}h ${remainder !== 0 && `${remainder}min`}`;
  } else {
    return `${currentValue} min`;
  }
};
