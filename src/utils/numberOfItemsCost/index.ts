// If the number of items is five or more, an additional 50 cent surcharge is added for each item above five. An extra "bulk" fee applies for more than 12 items of 1,20€
// Example 1: If the number of items is 4, no extra surcharge
// Example 2: If the number of items is 5, 50 cents surcharge is added
// Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
// Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)

const numberOfItemsCost = (numberOfItems: number) => {
  if (numberOfItems <= 4) {
    return 0;
  }

  if (numberOfItems <= 12) {
    return (numberOfItems - 4) * 0.5;
  }

  return (numberOfItems - 4) * 0.5 + 1.2;
};

export default numberOfItemsCost;
