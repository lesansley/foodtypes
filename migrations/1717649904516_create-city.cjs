exports.up = (pgm) => {
  pgm.createTable("city", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    name: { type: "text", notNull: true },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("city");
};
