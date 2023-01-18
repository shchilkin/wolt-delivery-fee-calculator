import isFridayRush from "./index";

describe("isFridayRush", () => {
  it("should return true for a date on a friday between 15 and 19", () => {
    expect(isFridayRush(new Date("2022-12-30 17:00:00"))).toBe(true);
  });
  it("should return false for a date on a friday before 15", () => {
    expect(isFridayRush(new Date("2022-12-30 14:00:00"))).toBe(false);
  });
  it("should return false for a date on a friday after 19", () => {
    expect(isFridayRush(new Date("2023-01-01 20:00:00"))).toBe(false);
  });
  it("should return false for a date on a saturday", () => {
    expect(isFridayRush(new Date("2023-01-01 16:00:00"))).toBe(false);
  });
});
