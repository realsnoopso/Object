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
}
