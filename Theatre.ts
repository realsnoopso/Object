import { Movie } from "./Moive";
import { Screening } from "./Screening";
import { createDate, createTime } from "./utils";

type TheatreProps = {
  screenings?: Screening[];
};

export class Theatre {
  #screenings: Screening[];

  constructor({ movies }: TheatreProps & { movies: Movie[] }) {
    this.#screenings = this.#createScreenings(movies);
  }

  #createScreenings(movies: Movie[]) {
    return [
      new Screening({
        date: createDate({ year: 2024, month: 10, day: 1 }),
        movie: movies.find(
          (movie) => movie.getMovie().name === "아바타"
        ) as Movie,
        session: 1,
        startTime: createTime({ hours: 10, minutes: 0 }),
      }),
    ];
  }

  findScreening(movieName: string, date: Date, session: number) {
    // todo
    return this.#screenings.find(
      (screening) =>
        screening.getScreening().movie.getMovie().name === movieName &&
        screening.getScreening().date.getFullYear() === date.getFullYear() &&
        screening.getScreening().session === session
    );
  }

  getTheatre() {
    return {
      screenings: this.#screenings,
    };
  }
}
