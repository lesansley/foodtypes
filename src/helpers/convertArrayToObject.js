const convertArrayToObject = (array, key) => {
  const count = Object.values(
    array.reduce((arr, { table }) => {
      let key = table;
      arr[key] = arr[key] || { table, count: 0 };
      arr[key].count++;
      return arr;
    }, {})
  );

  var totalCount = 1;
  count.forEach((item) => {
    totalCount = totalCount * item.count;
  });

  if (totalCount >= 1) {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: { id: item.id, name: item.name },
      };
    }, initialValue);
  }

  for (let i = 0; i < totalCount; i++) {}

  // Temporary return value
  return array;
};

export default convertArrayToObject;
