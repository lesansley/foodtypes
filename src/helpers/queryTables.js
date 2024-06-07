import pkg from "pg";
const { Client } = pkg;

// Define the connection configuration
const client = new Client({
  user: "root",
  host: "localhost",
  database: "foodstyles",
  password: "password",
  port: 5432,
});

// Function to execute the combined query with search terms
async function queryTables(searchTerms) {
  // Prepare the search condition with placeholders
  const similarityThreshold = 0.3;
  const conditions = searchTerms
    .map(
      (term, index) => `similarity(name, '$${term}') > ${similarityThreshold}`
    )
    .join(" OR ");

  const query = `
    SELECT 'brands' AS table, id, name FROM "brands"
		WHERE ${conditions}
    UNION ALL
    SELECT 'cities' AS table, id, name FROM "cities"
		WHERE ${conditions}
    UNION ALL
    SELECT 'diets' AS table, id, name FROM "diets"
		WHERE ${conditions}
    UNION ALL
    SELECT 'dishes' AS table, id, name FROM "dish-types"
		WHERE ${conditions}
  `;

  try {
    // Connect to the database
    await client.connect();

    // Execute the query with parameters
    const res = await client.query(query);
    // Return the results
    return res.rows;
  } catch (err) {
    console.error("Error executing query", err);
  } finally {
    // Close the database connection
    await client.end();
  }
}
export default queryTables;
