import type { Provider } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { ZLoggerNest } from "./logger-nest.mjs";

/**
 * The symbol to use with nestjs inject to add a lumberjacky logger to your service.
 */
export const ZLoggerToken = Symbol();

const ZLoggerProvider: Provider = {
  provide: ZLoggerToken,
  useValue: new ZLoggerNest(),
};

/**
 * This is the main entrypoint module that injects a default implementation of the logger.
 *
 * @example
 *
 * ```ts
 * import { Module } from '@nestjs/common';
 * import { ZLoggerModule} from '@zthun/lumberjacky-nest';
 *
 * @Module({
 *  imports: [ZLoggerModule]
 * })
 * export class MyModule{ }
 * ```
 */
@Module({
  providers: [ZLoggerProvider, ZLoggerNest],
  exports: [ZLoggerProvider, ZLoggerNest],
})
export class ZLoggerModule {}
