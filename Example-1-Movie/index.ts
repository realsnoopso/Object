import { DiscountAmountPolicy, DiscountRatioPolicy } from "./DiscountPolicy";
import { Movie } from "./Moive";
import { Theatre } from "./Theatre";
import { createDate, createTime } from "./utils";
import { User } from "./User";
import { Reservation } from "./Reservation";
import { Screening } from "./Screening";
import {
  DiscountTimeCondition,
  DiscountSessionCondition,
} from "./DiscountCondition";

export const theatre = new Theatre({
  movies: [
    new Movie({
      name: "아바타",
      price: 10000,
      discountPolicies: [new DiscountAmountPolicy(800)],
      discountConditions: [
        new DiscountSessionCondition(1),
        new DiscountSessionCondition(10),
        new DiscountTimeCondition({
          day: 1,
          startTime: createTime({ hours: 10, minutes: 0 }),
        }),
        new DiscountTimeCondition({
          day: 4,
          startTime: createTime({ hours: 18, minutes: 0 }),
        }),
      ],
    }),
    // new Movie({
    //   name: "타이타닉",
    //   price: 11000,
    //   discountPolicies: [new DiscountRatioPolicy(10)],
    //   runtime: createTime({ hours: 1, minutes: 0 }),
    //   startDate: createDate({ year: 2024, month: 10, day: 1 }),
    //   endDate: createDate({ year: 2024, month: 12, day: 31 }),
    // }),
    // new Movie({
    //   name: "스타워즈:깨어난 포스",
    //   price: 10000,
    //   runtime: createTime({ hours: 1, minutes: 0 }),
    //   startDate: createDate({ year: 2024, month: 10, day: 1 }),
    //   endDate: createDate({ year: 2024, month: 12, day: 31 }),
    // }),
    // new Movie({
    //   name: "어벤져스: 인피니티 워",
    //   price: 10000,
    //   runtime: createTime({ hours: 1, minutes: 0 }),
    //   startDate: createDate({ year: 2024, month: 10, day: 1 }),
    //   endDate: createDate({ year: 2024, month: 12, day: 31 }),
    // }),
    // new Movie({
    //   name: "쥬라기 월드",
    //   price: 10000,
    //   runtime: createTime({ hours: 1, minutes: 0 }),
    //   startDate: createDate({ year: 2024, month: 10, day: 1 }),
    //   endDate: createDate({ year: 2024, month: 12, day: 31 }),
    // }),
    // new Movie({
    //   name: "어벤져스",
    //   price: 10000,
    //   runtime: createTime({ hours: 1, minutes: 0 }),
    //   startDate: createDate({ year: 2024, month: 10, day: 1 }),
    //   endDate: createDate({ year: 2024, month: 12, day: 31 }),
    // }),
    // new Movie({
    //   name: "분노의 질주: 더 세븐",
    //   price: 10000,
    //   runtime: createTime({ hours: 1, minutes: 0 }),
    //   startDate: createDate({ year: 2024, month: 10, day: 1 }),
    //   endDate: createDate({ year: 2024, month: 12, day: 31 }),
    // }),
  ],
});

theatre.getTheatre().movies.map((v) => console.log(v.getMovie()));
theatre.getTheatre().screenings.map((v) => console.log(v.getScreening()));

const user = new User({ name: "소민경" });

const screening = theatre.findScreening(
  "아바타",
  new Date(createDate({ year: 2024, month: 10, day: 1 })),
  1
);

console.log(
  new Reservation({
    screening: screening as Screening,
    user,
    ticketAmount: 2,
  }).getReservation()
);
