exports.up = (pgm) => {
  pgm.createTable("brand", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    name: { type: "text", notNull: true },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("brand");
};
