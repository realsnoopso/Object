import { DiscountAmountPolicy, DiscountRatioPolicy } from "./DiscountPolicy";
import { Movie } from "./Moive";
import { Theatre } from "./Theatre";
import { createDate, createTime } from "./utils";
import { User } from "./User";
import { Reservation } from "./Reservation";
import { Screening } from "./Screening";

const theatre = new Theatre({
  startTime: createTime({ hours: 6, minutes: 0 }),
  endTime: createTime({ hours: 24, minutes: 0 }),
  gapTime: createTime({ hours: 0, minutes: 20 }),
  movies: [
    new Movie({
      name: "아바타",
      price: 10000,
      discountPolicy: new DiscountAmountPolicy(800),
      runtime: createTime({ hours: 1, minutes: 0 }),
      startDate: createDate({ year: 2024, month: 10, day: 1 }),
      endDate: createDate({ year: 2024, month: 12, day: 31 }),
    }),
    new Movie({
      name: "타이타닉",
      price: 11000,
      discountPolicy: new DiscountRatioPolicy(10),
      runtime: createTime({ hours: 1, minutes: 0 }),
      startDate: createDate({ year: 2024, month: 10, day: 1 }),
      endDate: createDate({ year: 2024, month: 12, day: 31 }),
    }),
    new Movie({
      name: "스타워즈:깨어난 포스",
      price: 10000,
      runtime: createTime({ hours: 1, minutes: 0 }),
      startDate: createDate({ year: 2024, month: 10, day: 1 }),
      endDate: createDate({ year: 2024, month: 12, day: 31 }),
    }),
    new Movie({
      name: "어벤져스: 인피니티 워",
      price: 10000,
      runtime: createTime({ hours: 1, minutes: 0 }),
      startDate: createDate({ year: 2024, month: 10, day: 1 }),
      endDate: createDate({ year: 2024, month: 12, day: 31 }),
    }),
    new Movie({
      name: "쥬라기 월드",
      price: 10000,
      runtime: createTime({ hours: 1, minutes: 0 }),
      startDate: createDate({ year: 2024, month: 10, day: 1 }),
      endDate: createDate({ year: 2024, month: 12, day: 31 }),
    }),
    new Movie({
      name: "어벤져스",
      price: 10000,
      runtime: createTime({ hours: 1, minutes: 0 }),
      startDate: createDate({ year: 2024, month: 10, day: 1 }),
      endDate: createDate({ year: 2024, month: 12, day: 31 }),
    }),
    new Movie({
      name: "분노의 질주: 더 세븐",
      price: 10000,
      runtime: createTime({ hours: 1, minutes: 0 }),
      startDate: createDate({ year: 2024, month: 10, day: 1 }),
      endDate: createDate({ year: 2024, month: 12, day: 31 }),
    }),
  ],
});

const user = new User({ name: "소민경" });

const screening = theatre.findScreening("아바타");

new Reservation({
  screening: screening as Screening,
  user,
  ticketAmount: 2,
});

console.log(user.getUser().reservations?.length);
console.log(
  user.getUser().reservations?.map((v) => console.log("j", v.getReservation()))
);
