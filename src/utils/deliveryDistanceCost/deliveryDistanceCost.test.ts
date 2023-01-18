import deliveryDistanceCost from "./index";

describe("deliveryDistanceCost", () => {
  it("should return 2 for a distance of 1000 meters", () => {
    expect(deliveryDistanceCost(1000)).toBe(2);
  });

  it("should return 3 for a distance of 1499 meters", () => {
    expect(deliveryDistanceCost(1499)).toBe(3);
  });

  it("should return 3 for a distance of 1500 meters", () => {
    expect(deliveryDistanceCost(1500)).toBe(3);
  });

  it("should return 4 for a distance of 1501 meters", () => {
    expect(deliveryDistanceCost(1501)).toBe(4);
  });

  it("should return 4 for a distance of 1999 meters", () => {
    expect(deliveryDistanceCost(1999)).toBe(4);
  });

  it("should return 5 for a distance of 2001 meters", () => {
    expect(deliveryDistanceCost(2001)).toBe(5);
  });
});
