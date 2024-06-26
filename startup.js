import "dotenv/config";
import { exec } from "child_process";
import seed from "./seeders/seed.js";
import pgConfig from "./config/pgConfig.js";
import pkg from "pg";
const { Client } = pkg;

const { user, password, databaseName, database, port, host } = pgConfig;
const databaseUrl = `postgres://${user}:${password}@${host}:${port}/${databaseName}`;
async function createDatabaseIfNotExists() {
  const adminClient = new Client({
    user,
    host,
    database,
    password,
    port,
  });

  try {
    await adminClient.connect();
    const result = await adminClient.query(
      `SELECT 1 FROM pg_database WHERE datname = '${databaseName}'`
    );
    if (result.rowCount === 0) {
      await adminClient.query(`CREATE DATABASE ${databaseName}`);
      console.log(`Database ${databaseName} created.`);
    } else {
      console.log(`Database ${databaseName} already exists.`);
    }
  } catch (err) {
    console.error("Error creating database:", err);
  } finally {
    await adminClient.end();
  }
}

function runMigrations() {
  return new Promise((resolve, reject) => {
    console.log("Running migrations...");
    exec(
      `DATABASE_URL=${databaseUrl} npm run migrate up`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Migration error: ${error.message}`);
          reject(error);
        } else if (stderr) {
          console.error(`Migration stderr: ${stderr}`);
          reject(stderr);
        } else {
          console.log(`Migration stdout: ${stdout}`);
          resolve();
        }
      }
    );
  });
}

async function startup() {
  try {
    await createDatabaseIfNotExists();
    console.log("Database check and creation complete.");
    await runMigrations();
    console.log("Migrations completed.");
    await seed();
    console.log("Seeding completed.");
  } catch (error) {
    console.error("Startup process failed:", error);
  }
}

startup();
