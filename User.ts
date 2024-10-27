import { Movie } from "./Moive";
import { Reservation } from "./Reservation";
import { Screening } from "./Screening";

export class User {
  #name: string;
  #reservations: Reservation[] | undefined;

  constructor({
    name,
    reservations,
  }: {
    name: string;
    reservations?: Reservation[];
  }) {
    this.#name = name;
    this.#reservations = reservations;
  }

  getUser() {
    return {
      name: this.#name,
      reservations: this.#reservations,
    };
  }

  updateUser({
    name = this.#name,
    reservations = this.#reservations,
  }: {
    name: string;
    reservations: Reservation[] | undefined;
  }) {
    this.#name = name;
    this.#reservations = reservations;
  }

  addReservation(reservation: Reservation) {
    if (!this.#reservations) {
      this.#reservations = [reservation];
    } else {
      this.#reservations = [...this.#reservations, reservation];
    }
  }
}
