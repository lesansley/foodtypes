const convertArrayToObject = (arr) => {
  // Group by table
  const grouped = arr.reduce((acc, item) => {
    if (!acc[item.table]) {
      acc[item.table] = [];
    }
    acc[item.table].push(item);
    return acc;
  }, {});

  console.log("grouped array:", grouped);
  // Check if there are any duplicates
  const hasDuplicates = Object.values(grouped).some(
    (items) => items.length > 1
  );

  if (!hasDuplicates) {
    // If no duplicates, create a single object with the desired structure
    return [
      {
        ...Object.keys(grouped).reduce((acc, table) => {
          acc[table] = {
            id: grouped[table][0].id,
            name: grouped[table][0].name,
          };
          return acc;
        }, {}),
      },
    ];
  } else {
    // If there are duplicates, generate all possible combinations
    const tables = Object.keys(grouped);

    const [cTable, ...rTables] = tables;
    // Function to generate combinations
    function* generateCombos(remainingTables, currentCombo = {}) {
      if (remainingTables.length === 0) {
        yield currentCombo;
      } else {
        const [currentTable, ...restTables] = remainingTables;
        for (const item of grouped[currentTable]) {
          yield* generateCombos(restTables, {
            ...currentCombo,
            [currentTable]: { id: item.id, name: item.name },
          });
        }
      }
    }

    // Generate and collect all combinations
    const combinations = Array.from(generateCombos(tables));

    return combinations;
  }
};

export default convertArrayToObject;
