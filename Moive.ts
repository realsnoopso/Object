import { DiscountCondition } from "./DiscountCondition";
import { DiscountPolicy } from "./DiscountPolicy";
import { Screening } from "./Screening";

type MovieProps = {
  name: string;
  price: number;
  discountPolicies?: DiscountPolicy[];
  discountConditions?: DiscountCondition[];
};

export class Movie {
  #name: string;
  #price: number;
  #discountPolicies?: DiscountPolicy[];
  #discountConditions?: DiscountCondition[];

  constructor({
    name,
    price,
    discountPolicies,
    discountConditions,
  }: MovieProps) {
    this.#name = name;
    this.#price = price;
    this.#discountPolicies = discountPolicies;
    this.#discountConditions = discountConditions;
  }

  getMovie() {
    return {
      name: this.#name,
      price: this.#price,
      discountPolicies: this.#discountPolicies,
      discountConditions: this.#discountConditions,
    };
  }
}
