import {
  DiscountSessionCondition,
  DiscountTimeCondition,
} from "./DiscountCondition";
import { Movie } from "./Moive";

type ScreeningProps = {
  date: Date;
  movie: Movie;
  session: number;
  startTime: Date;
};

export class Screening {
  #date: Date;
  #movie: Movie;
  #session: number;
  #startTime: Date;

  constructor({
    date,
    session,
    movie,
    startTime,
  }: {
    date: Date;
    session: number;
    movie: Movie;
    startTime: Date;
  }) {
    this.#date = date;
    this.#session = session;
    this.#movie = movie;
    this.#startTime = startTime;
  }

  getScreening() {
    return {
      date: this.#date,
      session: this.#session,
      movie: this.#movie,
      startTime: this.#startTime,
    };
  }

  getDiscountedPrice() {
    const { price, discountPolicies } = this.getScreening().movie.getMovie();
    if (!this.#checkDiscountConditions()) return price;
    if (!discountPolicies) return price;
    return discountPolicies.reduce((prevPrice, policy) => {
      return policy.getDiscountedPrice(prevPrice);
    }, price);
  }

  #checkDiscountConditions() {
    const { discountConditions } = this.#movie.getMovie();
    const { session, date, startTime } = this.getScreening();
    return (
      discountConditions &&
      discountConditions.some((condition) => {
        if (condition instanceof DiscountSessionCondition) {
          return condition.checkDiscountCondition({
            session,
          });
        }
        if (condition instanceof DiscountTimeCondition) {
          return condition.checkDiscountCondition({
            date,
            startTime,
          });
        }
      })
    );
  }
}
