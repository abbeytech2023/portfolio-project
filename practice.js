resturant = {
  name: "Top Fruit",
  location: "Abiola way",
  mainMenu: ["pizza", "shawarma", "indomie"],
  starterMenu: ["water", "coca-cola", "fearless"],
  openingHours: {
    mon: {
      open: "8am",
      close: "10pm",
    },

    tue: {
      open: "8am",
      close: "10pm",
    },
    wed: {
      open: "8am",
      close: "10pm",
    },
  },
};
const { mon, ...others } = resturant.openingHours;

console.log(mon, others);

const [menu, other, school, playful] = [
  ...resturant.starterMenu,
  ...resturant.mainMenu,
];
console.log(menu, other, school, playful);
