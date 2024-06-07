exports.up = (pgm) => {
  pgm.createTable("dish", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    name: { type: "text", notNull: true },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("dish");
};
