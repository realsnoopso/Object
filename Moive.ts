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

  getDiscountedPrice(screening: Screening) {
    if (!this.#checkDiscountConditions(screening)) return this.#price;
    if (!this.#discountPolicies) return this.#price;
    return this.#discountPolicies.reduce((prevPrice, policy) => {
      return policy.getDiscountedPrice(prevPrice);
    }, this.#price);
  }

  #checkDiscountConditions(screening: Screening) {
    return (
      this.#discountConditions &&
      this.#discountConditions.some((condition) => {
        return condition.checkDiscountCondition(screening);
      })
    );
  }
}
