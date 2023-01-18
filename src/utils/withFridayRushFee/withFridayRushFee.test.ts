import withFridayRushFee from "./Index";

describe("withFridayRushFee", () => {
  it("should return the normal delivery fee if it is not a friday", () => {
    expect(withFridayRushFee(10, new Date("2022-12-31 17:00:00"))).toBe(10);
  });
  it("should return the normal delivery fee if it is a friday but not during the rush", () => {
    expect(withFridayRushFee(10, new Date("2022-12-30 14:00:00"))).toBe(10);
  });
  it("should return the delivery fee multiplied by 1.2 if it is a friday during the rush", () => {
    expect(withFridayRushFee(10, new Date("2022-12-30 16:00:00"))).toBe(12);
  });
});
