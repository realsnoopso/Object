import { Screening } from "./Screening";

export type DiscountCondition =
  | DiscountSessionCondition
  | DiscountPeriodCondition;

export class DiscountSessionCondition {
  #order: number;

  constructor(order: number) {
    this.#order = order;
  }

  checkDiscountCondition(screening: Screening) {
    let condition = true;
    if (this.#order !== screening.getScreening().session.getSession().order) {
      condition = false;
    }
    return condition;
  }
}

class DiscountPeriodCondition {
  #day: number;
  #startTime: Date;
  #endTime: Date;

  constructor(day: number, startTime: Date, endTime: Date) {
    this.#day = day;
    this.#startTime = startTime;
    this.#endTime = endTime;
  }

  checkDiscountCondition(screening: Screening) {
    let condition = true;
    const { date, session } = screening.getScreening();

    condition = date.getDay() === this.#day;

    if (this.#startTime) {
      if (
        this.#startTime.getTime() > session.getSession().startTime.getTime()
      ) {
        condition = false;
      }
    }

    if (this.#endTime) {
      if (this.#endTime.getTime() < session.getSession().endTime.getTime()) {
        condition = false;
      }
    }

    return condition;
  }
}
