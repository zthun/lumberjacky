# Lumberjacky

Does ESLint flag your calls to `console.log`? Instead of disabling the rule or
giving up logging, use Lumberjacky: a logging framework for frontend and backend
applications with a shared interface that supports dependency injection.

Write log entries in one format, then send them to the console, NestJS, Sentry,
or multiple destinations through a composite logger.

## Packages

| Package                                                            | Purpose                                                                |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [@zthun/lumberjacky-log](packages/lumberjacky-log/README.md)       | Core interfaces, log entry builder, and framework-independent loggers. |
| [@zthun/lumberjacky-nest](packages/lumberjacky-nest/README.md)     | NestJS logger adapter and dependency injection module.                 |
| [@zthun/lumberjacky-sentry](packages/lumberjacky-sentry/README.md) | Sentry logger adapter.                                                 |
