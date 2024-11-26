export class User {
  #name: string;

  constructor({ name }: { name: string }) {
    this.#name = name;
  }

  getUser() {
    return {
      name: this.#name,
    };
  }
}
