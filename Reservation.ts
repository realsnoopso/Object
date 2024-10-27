import { Screening } from "./Screening";
import { User } from "./User";

export class Reservation {
  #screening: Screening;
  #user: User;
  #ticketAmount: number;
  #basePrice: number;
  #discountedPrice: number;

  constructor({
    screening,
    user,
    ticketAmount,
  }: {
    screening: Screening;
    user: User;
    ticketAmount: number;
  }) {
    this.#screening = screening;
    this.#user = user;

    this.#ticketAmount = ticketAmount;
    const movie = screening.getScreening().movie;

    this.#basePrice = movie.getMovie().price * ticketAmount;
    this.#discountedPrice = this.#getDiscountedPrice(screening) * ticketAmount;
  }

  #getDiscountedPrice(screening: Screening) {
    const { price, discountPolicies } = this.#screening
      .getScreening()
      .movie.getMovie();
    if (!this.#checkDiscountConditions(screening)) return price;
    if (!discountPolicies) return price;
    return discountPolicies.reduce((prevPrice, policy) => {
      return policy.getDiscountedPrice(prevPrice);
    }, price);
  }

  #checkDiscountConditions(screening: Screening) {
    const { discountConditions } = this.#screening
      .getScreening()
      .movie.getMovie();
    return (
      discountConditions &&
      discountConditions.some((condition) => {
        return condition.checkDiscountCondition(screening);
      })
    );
  }

  getReservation() {
    return {
      screening: this.#screening,
      user: this.#user,
      basePrice: this.#basePrice,
      discountedPrice: this.#discountedPrice,
      ticketAmount: this.#ticketAmount,
    };
  }
}
