import isValidValue from "./index";

describe("isValidValue", () => {
  it("should return false if value is 0", () => {
    expect(isValidValue(0, 0, 10)).toBe(false);
  });

  it("should return true if value is between min and max", () => {
    expect(isValidValue(5, 1, 10)).toBe(true);
  });

  it("should return false if value is less than min", () => {
    expect(isValidValue(-1, 1, 10)).toBe(false);
  });

  it("should return false if value is greater than max", () => {
    expect(isValidValue(11, 1, 10)).toBe(false);
  });
});
