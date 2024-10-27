import { DiscountCondition } from "./DiscountOrderCondition";
import { DiscountPolicy } from "./DiscountPolicy";
import { Screening } from "./Screening";

type MovieProps = {
  name: string;
  price: number;
  runtime: Date;
  startDate: Date;
  endDate: Date;
  discountPolicy?: DiscountPolicy;
  discountConditions?: DiscountCondition[];
};

export class Movie {
  #name: string;
  #price: number;
  #runtime: Date;
  #startDate: Date;
  #endDate: Date;
  #discountPolicy?: DiscountPolicy;
  #discountConditions?: DiscountCondition[];

  constructor({
    name,
    price,
    runtime,
    startDate,
    endDate,
    discountPolicy,
    discountConditions,
  }: MovieProps) {
    this.#name = name;
    this.#price = price;
    this.#discountPolicy = discountPolicy;
    this.#discountConditions = discountConditions;
    this.#runtime = runtime;
    this.#startDate = startDate;
    this.#endDate = endDate;
  }

  getMovie() {
    return {
      name: this.#name,
      price: this.#price,
      discountPolicy: this.#discountPolicy,
      discountConditions: this.#discountConditions,
      runtime: this.#runtime,
      startDate: this.#startDate,
      endDate: this.#endDate,
    };
  }

  updateMovie({
    name,
    price,
    discountPolicy,
    discountConditions,
    runtime,
    startDate,
    endDate,
  }: MovieProps) {
    this.#name = name;
    this.#price = price;
    this.#discountPolicy = discountPolicy;
    this.#discountConditions = discountConditions;
    this.#runtime = runtime;
    this.#startDate = startDate;
    this.#endDate = endDate;
  }

  getDiscountedPrice(screening: Screening) {
    if (!this.#checkDiscountConditions(screening)) return this.#price;
    if (!this.#discountPolicy) return this.#price;
    return this.#discountPolicy.getDiscountedPrice(this.#price);
  }

  #checkDiscountConditions(screening: Screening) {
    return (
      this.#discountConditions &&
      this.#discountConditions.every((condition) =>
        condition.checkDiscountCondition(screening)
      )
    );
  }
}
