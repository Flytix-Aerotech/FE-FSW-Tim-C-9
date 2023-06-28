import dayjs from 'dayjs';

export const GenerateDate = (month = dayjs().month(), year = dayjs().year()) => {
  const firstDayOfTheMonth = dayjs().year(year).month(month).startOf("month");
  const lastDayOfTheMonth = dayjs().year(year).month(month).endOf("month");
  const arrayOfDates = [];


  for (let i = 0; i < firstDayOfTheMonth.date(); i++) {
    arrayOfDates.push({
      currentMonth: false,
      date: firstDayOfTheMonth.day(i)
    })

  }

  for (let i = firstDayOfTheMonth.date(); i <= lastDayOfTheMonth.date(); i++) {
    arrayOfDates.push({
      date: firstDayOfTheMonth.date(i),
      currentMonth : true,
      today : firstDayOfTheMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString(),
    })
  }

  const remaining = 42 - arrayOfDates.length

  for (let i = lastDayOfTheMonth.date() + 1; i <= lastDayOfTheMonth.date() + remaining; i++) {
    arrayOfDates.push({
      date : lastDayOfTheMonth.date(i),
      currentMonth : false
    })
  }


  return arrayOfDates;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]


console.log(GenerateDate())