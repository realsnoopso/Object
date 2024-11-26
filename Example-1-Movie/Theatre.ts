import { Movie } from "./Moive";
import { Screening } from "./Screening";
import { createDate, createTime } from "./utils";

type TheatreProps = {
  movies: Movie[];
  screenings?: Screening[];
};

export class Theatre {
  #movies: Movie[];
  #screenings: Screening[];

  constructor({ movies }: TheatreProps) {
    this.#movies = movies;
    this.#screenings = this.#createScreenings(movies);
  }

  findScreening(movieName: string, date: Date, session: number) {
    return this.#screenings.find(
      (screening) =>
        screening.getScreening().movie.getMovie().name === movieName &&
        screening.getScreening().date.getFullYear() === date.getFullYear() &&
        screening.getScreening().session === session
    );
  }

  getTheatre() {
    return {
      movies: this.#movies,
      screenings: this.#screenings,
    };
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
}
