import { getCurrentDate } from "../services/dateFunctions";

interface ResponseProps {
  day: number;
  month: number;
  year: number;
  dayName: string;
  monthName: string;
}

describe("DATE FUNCTIONS", () => {
  //BE CAREFUL THIS TEST DEPENDS ON YOUR CURRENT DAY
  //AND YOUR SYSTEM LANGUAGE
  //TESTED ON ENGLISH ENVIROMENT
  //TESTED ON SATURDAY 10 OCTOBER 2021
  test("Get current date", () => {
    expect(getCurrentDate()).toEqual({
      day: 16,
      month: 10,
      year: 2021,
      dayName: "Saturday",
      monthName: "October",
    });
  });
});
