import formatDate from "./index";
describe("formatDate", () => {
  it("should format date to 'yyyy-MM-ddThh:mm'", () => {
    const date = new Date("2020-01-01T00:00:00");
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("2020-01-01T00:00");
  });
});
