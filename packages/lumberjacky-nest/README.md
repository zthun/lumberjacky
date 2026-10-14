# Lumberjacky Nest

This package integrates Lumberjacky with [NestJS](https://nestjs.com/),
forwarding log entries to the NestJS `Logger`.

## Installation

Install with npm or Yarn in your NestJS application. Include the core package if
you use its interfaces or log entry builder directly:

```sh
npm install @zthun/lumberjacky-nest @zthun/lumberjacky-log
# or
yarn add @zthun/lumberjacky-nest @zthun/lumberjacky-log
```

## Usage

Import `ZLoggerModule` into your module and inject `ZLoggerToken` into your
service. Wrap the injected logger with `ZLoggerContext` to supply a default
context:

```ts
import { Inject, Injectable, Module } from "@nestjs/common";
import type { IZLogger } from "@zthun/lumberjacky-log";
import { ZLogEntryBuilder, ZLoggerContext } from "@zthun/lumberjacky-log";
import { ZLoggerModule, ZLoggerToken } from "@zthun/lumberjacky-nest";

@Injectable()
export class MyService {
  private readonly logger: IZLogger;

  constructor(@Inject(ZLoggerToken) logger: IZLogger) {
    this.logger = new ZLoggerContext("MyService", logger);
  }

  run(): void {
    const entry = new ZLogEntryBuilder()
      .info()
      .message("Task started.")
      .build();

    this.logger.log(entry);
  }
}

@Module({
  imports: [ZLoggerModule],
  providers: [MyService],
})
export class MyModule {}
```

`ZLoggerModule` also exports `ZLoggerNest` for direct injection. The adapter
forwards each entry's message and context, mapping `CATASTROPHE`, `ERROR`,
`WARNING`, and `INFO` to the NestJS logger's `fatal`, `error`, `warn`, and `log`
methods, respectively.
