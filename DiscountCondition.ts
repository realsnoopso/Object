export type DiscountCondition =
  | DiscountSessionCondition
  | DiscountTimeCondition;

export class DiscountSessionCondition {
  #session: number;

  constructor(session: number) {
    this.#session = session;
  }

  checkDiscountCondition({ session }: { session: number }) {
    let condition = true;
    if (this.#session !== session) {
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

  checkDiscountCondition({ date, startTime }: { date: Date; startTime: Date }) {
    let condition = true;

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
