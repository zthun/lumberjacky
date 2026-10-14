# Lumberjacky Sentry

This package integrates Lumberjacky with [Sentry](https://sentry.io/),
forwarding log entries to a supplied Sentry client.

## Installation

Install with npm or Yarn. Include the core package if you use its interfaces or
log entry builder directly:

```sh
npm install @zthun/lumberjacky-sentry @zthun/lumberjacky-log
# or
yarn add @zthun/lumberjacky-sentry @zthun/lumberjacky-log
```

## Usage

Pass a configured Sentry `Client` to `ZLoggerSentry`. The following function
accepts your application's client and sends a log entry:

```ts
import type { Client } from "@sentry/core";
import { ZLogEntryBuilder } from "@zthun/lumberjacky-log";
import { ZLoggerSentry } from "@zthun/lumberjacky-sentry";

export function logStartup(client: Client): void {
  const logger = new ZLoggerSentry(client);
  const entry = new ZLogEntryBuilder()
    .info()
    .context("MyApp")
    .message("Application started.")
    .build();

  logger.log(entry);
}
```

The adapter calls the client's `captureEvent` method with the entry's message,
the mapped severity, and the context in `extra.context`. It maps `CATASTROPHE`,
`ERROR`, `WARNING`, and `INFO` to Sentry's `fatal`, `error`, `warning`, and
`info` levels, respectively. It does not forward the entry's creation timestamp.
