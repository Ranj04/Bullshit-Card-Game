import winston from "winston";
import path from "path";
import fs from "fs";

const isProduction = process.env.NODE_ENV === "production";

// Ensure logs directory exists in production
if (isProduction) {
  const logsDir = path.join(process.cwd(), "logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
}

// Define log format
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.printf(({ timestamp, level, message, stack }) => {
    if (stack) {
      return `${timestamp} [${level.toUpperCase()}]: ${message}\n${stack}`;
    }
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
  }),
);

// Configure transports based on environment
const transports: winston.transport[] = [];

// Always log to console (needed for Railway/cloud platforms)
transports.push(
  new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize(), logFormat),
  }),
);

if (isProduction) {
  // Production: Also write to files
  transports.push(
    new winston.transports.File({
      filename: path.join(process.cwd(), "logs", "combined.log"),
      level: "info",
    }),
    new winston.transports.File({
      filename: path.join(process.cwd(), "logs", "error.log"),
      level: "error",
    }),
  );
}

// Create logger instance
const logger = winston.createLogger({
  level: isProduction ? "info" : "debug",
  format: logFormat,
  transports,
});

export default logger;
