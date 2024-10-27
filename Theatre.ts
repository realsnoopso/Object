import { Movie } from "./Moive";
import { Screening } from "./Screening";
import { Session } from "./Session";
import { createTime } from "./utils";

type TheatreProps = {
  startTime: Date;
  endTime: Date;
  gapTime: Date;
  screenings?: Screening[];
};

export class Theatre {
  #startTime: Date;
  #endTime: Date;
  #gapTime: Date;
  #screenings: Screening[];

  constructor({
    startTime,
    endTime,
    gapTime,
    movies,
  }: TheatreProps & { movies: Movie[] }) {
    this.#startTime = startTime;
    this.#endTime = endTime;
    this.#gapTime = gapTime;
    this.#screenings = this.#createScreenings(startTime, endTime, movies);
  }

  #createScreenings(startTime: Date, endTime: Date, movies: Movie[]) {
    const screenings: Screening[] = [];

    movies.forEach((movie) => {
      const { runtime, startDate, endDate } = movie.getMovie();
      const duration = this.#getDuration(startDate, endDate);

      duration.forEach((date) => {
        const sessions = this.#createSessions(startTime, endTime, runtime);
        return sessions.map((session) => {
          const screening = new Screening({ date, session, movie });
          screenings.push(screening);
        });
      });
    });

    return screenings;
  }

  #createSessions(startTime: Date, endTime: Date, runtime: Date) {
    let order = 1;
    let time = startTime;
    const sessions = [];
    while (time.getTime() <= endTime.getTime()) {
      const session = new Session({
        order: order++,
        startTime: time,
        endTime: createTime({
          hours: time.getHours() + runtime.getHours(),
          minutes: time.getMinutes() + runtime.getMinutes(),
        }),
      });
      sessions.push(session);
      time = createTime({
        hours: session.getSession().endTime.getHours() + runtime.getHours(),
        minutes:
          session.getSession().endTime.getMinutes() + runtime.getMinutes(),
      });
    }
    return sessions;
  }

  #getDuration(startDate: Date, endDate: Date) {
    const duration = [];
    let currentDate = new Date(startDate.getTime());

    while (currentDate.getTime() <= endDate.getTime()) {
      duration.push(currentDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return duration;
  }

  findScreening(movieName: string) {
    // todo
    return this.#screenings.find(
      (screening) =>
        screening.getScreening().movie.getMovie().name === movieName
    );
  }

  getTheatre() {
    return {
      startTime: this.#startTime,
      endTime: this.#endTime,
      gapTime: this.#gapTime,
      screenings: this.#screenings,
    };
  }

  updateTheatre({ startTime, endTime, gapTime }: TheatreProps) {
    this.#startTime = startTime;
    this.#endTime = endTime;
    this.#gapTime = gapTime;
  }
}
