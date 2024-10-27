export type DiscountPolicy = DiscountAmountPolicy | DiscountRatioPolicy;

export class DiscountAmountPolicy {
  #amount: number;

  constructor(amount: number) {
    this.#amount = amount;
  }
  getDiscountedPrice(originPrice: number) {
    return originPrice - this.#amount;
  }
}

export class DiscountRatioPolicy {
  #ratio: number;

  constructor(ratio: number) {
    this.#ratio = ratio;
  }
  getDiscountedPrice(originalPrice: number) {
    return originalPrice + originalPrice * (this.#ratio * 0.01);
  }
}
