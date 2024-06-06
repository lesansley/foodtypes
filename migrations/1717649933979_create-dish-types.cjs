exports.up = (pgm) => {
  pgm.createTable("dish-types", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    name: { type: "text", notNull: true },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("dish-types");
};

// export const shorthands = undefined;

// export const up = (pgm) => {
//   pgm.createTable("dish_types", {
//     id: {
//       type: "serial",
//       primaryKey: true,
//       notNull: true,
//     },
//     name: { type: "text", notNull: true },
//   });
// };

// export const down = (pgm) => {
//   pgm.dropTable("dish_types");
// };
