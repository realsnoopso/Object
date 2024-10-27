import { Movie } from "./Moive";
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
    this.#discountedPrice = movie.getDiscountedPrice(screening) * ticketAmount;
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
