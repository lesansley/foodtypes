exports.up = (pgm) => {
  pgm.createTable("cities", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    name: { type: "text", notNull: true },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("cities");
};

// export const shorthands = undefined;

// export const up = (pgm) => {
//   pgm.createTable("cities", {
//     id: {
//       type: "serial",
//       primaryKey: true,
//       notNull: true,
//     },
//     name: { type: "text", notNull: true },
//   });
// };

// export const down = (pgm) => {
//   pgm.dropTable("cities");
// };
