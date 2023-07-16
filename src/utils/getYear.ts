export const getYear = () => {
  const maxOffset = 123;
  const thisYear = new Date().getFullYear();
  const allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }

  return allYears;
};
