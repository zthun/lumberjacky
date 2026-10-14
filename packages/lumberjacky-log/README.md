# Lumberjacky Log

The core Lumberjacky package provides logging interfaces, a log entry builder,
and loggers that can be used without an application framework.

## Installation

Install with npm or Yarn:

```sh
npm install @zthun/lumberjacky-log
# or
yarn add @zthun/lumberjacky-log
```

## Loggers

The package includes four loggers that implement `IZLogger`:

| Logger             | Description                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `ZLoggerConsole`   | Writes timestamped messages to the supplied console.                                                                |
| `ZLoggerComposite` | Forwards each log entry to every supplied child logger.                                                             |
| `ZLoggerSilent`    | Discards log entries; useful for unit tests.                                                                        |
| `ZLoggerContext`   | Supplies a default context when the entry's context is missing or empty, then forwards the entry to another logger. |

## Usage

Create an entry with `ZLogEntryBuilder` and pass it to a logger's `log` method:

```ts
import {
  ZLogEntryBuilder,
  ZLoggerConsole,
  ZLoggerContext,
} from "@zthun/lumberjacky-log";

const logger = new ZLoggerContext("MyApp", new ZLoggerConsole(console));

const entry = new ZLogEntryBuilder()
  .info()
  .message("Application started.")
  .build();

logger.log(entry);
```

Log entries contain a message, a level, a creation timestamp, and an optional
context. The builder defaults to the `ERROR` level, an empty message, and the
current timestamp as an ISO string. Use `info()`, `warning()`, `error()`, or
`catastrophe()` to set the level.
