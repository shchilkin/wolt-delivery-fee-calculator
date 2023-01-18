import numberOfItemsCost from "./index";

describe("numberOfItemsCost", () => {
  it("should return 0 for 4 items", () => {
    expect(numberOfItemsCost(4)).toBe(0);
  });
  it("should return 0.5 for 5 items", () => {
    expect(numberOfItemsCost(5)).toBe(0.5);
  });
  it("should return 3 for 10 items", () => {
    expect(numberOfItemsCost(10)).toBe(3);
  });
  it("should return 5.7 for 13 items", () => {
    expect(numberOfItemsCost(13)).toBe(5.7);
  });
});
