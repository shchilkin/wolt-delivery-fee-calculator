import minMaxValueGuard from "./index";

describe("minMaxValueGuard", () => {
  it("should return the min value for a value less than the min", () => {
    expect(minMaxValueGuard(1, 2, 10)).toBe(2);
  });
  it("should return the max value for a value greater than the max", () => {
    expect(minMaxValueGuard(11, 2, 10)).toBe(10);
  });
  it("should return the value for a value between the min and max", () => {
    expect(minMaxValueGuard(5, 2, 10)).toBe(5);
  });
});
