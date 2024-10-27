export const createTime = ({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}) => {
  const date = new Date();
  date.setHours(hours, minutes);
  return date;
};

export const createDate = ({
  year,
  month,
  day,
}: {
  year: number;
  month: number;
  day: number;
}) => {
  const date = new Date();
  date.setFullYear(year, month, day);
  return date;
};
