import { IncomingMessage, ServerResponse } from "http";

const ErrorHandler = (
  err: any,
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void
) => {
  if (process.env.NODE_ENV === "production") {
    // Send errors to your error monitoring tool like Sentry
  }

  // Sett the HTTP status code
  res.statusCode = 500;

  // Set the default HTTP message
  res.write(
    JSON.stringify({
      error: "Internal server error",
    })
  );

  res.end();
  next();
};

export default ErrorHandler;
