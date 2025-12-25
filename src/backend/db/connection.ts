import { configDotenv } from "dotenv";
import pgPromise from "pg-promise";

configDotenv();

// Debug: log available env vars (remove after fixing)
console.log("Available env vars:", Object.keys(process.env).filter(k => k.includes("DATABASE") || k.includes("PG") || k.includes("POSTGRES")));
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);

const pgp = pgPromise();

const connectionString = process.env.DATABASE_URL;

if (connectionString === undefined) {
  throw new Error("Database url is not available");
}

const db = pgp(connectionString);

export default db;
