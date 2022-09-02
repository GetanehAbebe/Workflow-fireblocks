export const getNextWeekRange = (day: Date) => {
  // get current date
  const first = day.getDate() - day.getDay() + 7; // First day is the day of the month - the day of the week
  const last = first + 6; // last day is the first day + 6

  const firstday = new Date(day.setDate(first));
  const lastday = new Date(day.setDate(last));

  return {
    start: new Date(firstday).toISOString().slice(0, 10),
    end: new Date(lastday).toISOString().slice(0, 10),
  };
};

export const getAvialablePositions = (
  positions: any,
  positionNumber: Number
): Number[] => {
  const avialeablePositions = [];
  for (let i = 1; i <= positionNumber; i++) {
    if (positions && !positions[i]) {
      avialeablePositions.push(i);
    }
  }
  return avialeablePositions;
};
