// enum 선언 1번째 방법
enum Day {
  Monday = "mon",
  Tuesday = "tue",
  Wednesday = "wed",
  Thursday = "thu",
  Friday = "fri",
  Saturday = "sat",
  Sunday = "sun",
}

function test(type: Day) {
  console.log(type);
}
test(Day.Monday);

// enum 선언 2번째 방법
type Day2 =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

function test2(type: Day2) {
  console.log(type);
}
test2("Monday");

// interface의 key를 enum으로 사용
interface Day3Interface {
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday: number;
}

type Day3 = keyof Day3Interface;
function test3(type: Day3) {
  console.log(type);
}
test3("Monday");
