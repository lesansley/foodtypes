import pkg from "pg";
const { Client } = pkg;
import fs from "fs";
import csv from "csv-parser";
import pgConfig from "../config/pgConfig.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDirectory = path.join(__dirname, "../data");

async function seedTable(client, csvFilePath, tableName) {
  const fullPath = path.join(dataDirectory, csvFilePath);
  console.log(`Seeding data from ${fullPath} into table ${tableName}...`);
  const readStream = fs.createReadStream(fullPath);
  const parser = csv();

  readStream.pipe(parser);

  for await (const row of parser) {
    const { id, name } = row;
    await client.query(
      `INSERT INTO "${tableName}" (id, name) VALUES ($1, $2)`,
      [id, name]
    );
  }
  console.log(`Seeding for table ${tableName} completed.`);
}

const { user, password, databaseName, port, host } = pgConfig;

async function seed() {
  const client = new Client({
    user,
    password,
    database: databaseName,
    port,
    host,
  });

  try {
    await client.connect();
    console.log("Database seeding started.");
    await seedTable(client, "brands.csv", "brands");
    await seedTable(client, "cities.csv", "cities");
    await seedTable(client, "diets.csv", "diets");
    await seedTable(client, "dish-types.csv", "dish-types");

    console.log("Database seeding completed.");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await client.end();
  }
}

export default seed;
