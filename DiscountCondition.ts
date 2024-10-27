import { Screening } from "./Screening";

export type DiscountCondition =
  | DiscountSessionCondition
  | DiscountTimeCondition;

export class DiscountSessionCondition {
  #session: number;

  constructor(session: number) {
    this.#session = session;
  }

  checkDiscountCondition(screening: Screening) {
    let condition = true;
    if (this.#session !== screening.getScreening().session) {
      condition = false;
    }
    return condition;
  }
}

export class DiscountTimeCondition {
  #day?: number;
  #startTime?: Date;

  constructor({ day, startTime }: { day?: number; startTime?: Date }) {
    this.#day = day;
    this.#startTime = startTime;
  }

  checkDiscountCondition(screening: Screening) {
    let condition = true;
    const { date, startTime } = screening.getScreening();

    if (this.#day) {
      condition = date.getDay() === this.#day;
    } else {
      condition = false;
    }

    if (this.#startTime) {
      if (this.#startTime.getTime() > startTime.getTime()) {
        condition = false;
      }
    }

    return condition;
  }
}
