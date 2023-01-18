import calculateDeliveryFee from "./index";

describe("calculateDeliveryFee", () => {
  it("should return 0 for a cart value of 100 or more", () => {
    expect(calculateDeliveryFee(250, 1000, 1, new Date())).toBe(0);
  });
  it("should return 10 for a cart value of 89.90", () => {
    expect(calculateDeliveryFee(89.9, 1000, 1, new Date())).toBe(3);
  });

  it("should return for a cart with order under 10 eur", () => {
    expect(calculateDeliveryFee(2, 500, 1, new Date())).toBe(10);
  });
});
