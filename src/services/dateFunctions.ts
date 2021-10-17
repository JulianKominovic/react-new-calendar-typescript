import moment, { Moment } from "moment";
import "moment/locale/es";
import "moment/locale/fr";

interface Date {
  day: number;
  month: number;
  year: number;
  dayName: string;
  monthName: string;
}

const USER_LANGUAGE: string = navigator.language;

const currentMoment: Moment = moment().locale(USER_LANGUAGE);
const flexMoment: Moment = moment().locale(USER_LANGUAGE);
const formattedDate: Moment = moment().locale(USER_LANGUAGE);

const getCurrentDate = (): Date => {
  return {
    day: currentMoment.date(),
    month: currentMoment.month() + 1,
    year: currentMoment.year(),
    dayName: currentMoment.format("dddd"),
    monthName: currentMoment.format("MMMM"),
  };
};

const calculatePreviousMonth = (m: number, y: number): string[] => {
  const localMoment = moment().locale(USER_LANGUAGE).year(y).month(m);

  const prevMonthArray = localMoment
    .locale(USER_LANGUAGE)
    .subtract(2, "months")
    .format("M,YYYY")
    .split(",");

  return prevMonthArray;
};

const calculateNextMonth = (m: number, y: number) => {
  const localMoment = moment().locale(USER_LANGUAGE).year(y).month(m);

  const nextMonthArray = localMoment
    .locale(USER_LANGUAGE)
    .add(1, "months")
    .subtract(1, "months")
    .format("M,YYYY")
    .split(",");

  return nextMonthArray;
};

const verifyOffsetDays = (year: number, month: number, daysArray: string[]) => {
  for (let i = -7; i < 7; i++) {
    let dateToText = formattedDate
      .locale(USER_LANGUAGE)
      .year(year)
      .month(month - 1)
      .date(i)
      .format("dd,D")
      .split(",");

    let namesOfDays = dateToText[0];
    let numberOfDay = dateToText[1];

    if (numberOfDay === "1") {
      return daysArray.indexOf(namesOfDays);
    }
  }
};

const getDaysOfMonth = (year: number, month: number) => {
  const days: string[] = [];
  constructNameOfDays().forEach((e) => {
    const itemDestructured = e.split("");
    days.push(itemDestructured[0] + itemDestructured[1]);
  });
  let offsetDays: any = verifyOffsetDays(year, month, days);

  for (let i = 0; i < 42; i++) {
    days.push(
      flexMoment
        .locale(USER_LANGUAGE)
        .year(year)
        .month(month - 1)
        .date(i + 1 - offsetDays)
        .format("D")
    );
  }

  return days;
};

//this returns the name of the days in the correct languages
const constructNameOfDays = () => {
  const namesOfDays = [];
  for (let i = 0; i < 7; i++) {
    namesOfDays.push(
      flexMoment
        .locale(USER_LANGUAGE)
        .year(2021) //this year month and dates match with the following order:
        //monday -tuesday, wednesday, ..., sunday
        .month(2)
        .date(i + 1)
        .format("ddd")
    );
  }
  return namesOfDays;
};

const getCompleteNameOfMonth = (m: number) => {
  const monthMoment = moment()
    .locale(USER_LANGUAGE)
    .month(m - 1)
    .format("MMMM")
    .toUpperCase();

  return monthMoment;
};

const getDayOfTheWeek = (y: number, m: number, d: number) => {
  const monthMoment = moment()
    .locale(USER_LANGUAGE)
    .year(y)
    .month(m - 1)
    .date(d)
    .format("dddd")
    .toUpperCase();

  return monthMoment;
};

export {
  getCurrentDate,
  getDaysOfMonth,
  getCompleteNameOfMonth,
  calculatePreviousMonth,
  calculateNextMonth,
  getDayOfTheWeek,
  USER_LANGUAGE,
};
