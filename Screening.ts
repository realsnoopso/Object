import { Movie } from "./Moive";
import { Session } from "./Session";

type ScreeningProps = {
  date: Date;
  session: Session;
  movie: Movie;
};

export class Screening {
  #date: Date;
  #session: Session;
  #movie: Movie;

  constructor({
    date,
    session,
    movie,
  }: {
    date: Date;
    session: Session;
    movie: Movie;
  }) {
    this.#date = date;
    this.#session = session;
    this.#movie = movie;
  }

  getScreening() {
    return {
      date: this.#date,
      session: this.#session,
      movie: this.#movie,
    };
  }

  updateScreening({ date, session, movie }: ScreeningProps) {
    this.#date = date;
    this.#session = session;
    this.#movie = movie;
  }
}
