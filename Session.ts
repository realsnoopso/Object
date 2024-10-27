export type SessionProps = {
  order: number;
  startTime: Date;
  endTime: Date;
};

export class Session {
  #order: number;
  #startTime: Date;
  #endTime: Date;

  constructor({ order, startTime, endTime }: SessionProps) {
    this.#order = order;
    this.#startTime = startTime;
    this.#endTime = endTime;
  }

  getSession() {
    return {
      order: this.#order,
      startTime: this.#startTime,
      endTime: this.#endTime,
    };
  }
}
