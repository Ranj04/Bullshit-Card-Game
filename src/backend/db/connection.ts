import { configDotenv } from "dotenv";
import pgPromise from "pg-promise";

configDotenv();

const pgp = pgPromise();

// Support both DATABASE_URL (local) and DATABASE_PUBLIC_URL (Railway)
const connectionString = process.env.DATABASE_URL || process.env.DATABASE_PUBLIC_URL;

if (connectionString === undefined) {
  throw new Error("Database url is not available");
}

const db = pgp(connectionString);

export default db;
