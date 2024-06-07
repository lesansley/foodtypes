import pgConfig from "../../config/pgConfig.js";
import pkg from "pg";
const { Client } = pkg;
// Define the connection configuration

const { user, password, databaseName, port, host } = pgConfig;
const client = new Client({
  user,
  password,
  database: databaseName,
  port,
  host,
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
    SELECT 'brand' AS table, id, name FROM "brand"
		WHERE ${conditions}
    UNION ALL
    SELECT 'city' AS table, id, name FROM "city"
		WHERE ${conditions}
    UNION ALL
    SELECT 'diet' AS table, id, name FROM "diet"
		WHERE ${conditions}
    UNION ALL
    SELECT 'dish' AS table, id, name FROM "dish"
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
