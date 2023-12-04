import { Module, Provider } from '@nestjs/common';
import { ZLoggerNest } from './logger-nest';

/**
 * The symbol to use with {@link @nestjs/common#Inject} to add a lumberjacky logger to your service.
 */
export const ZLoggerToken = Symbol();

const ZLoggerProvider: Provider = { provide: ZLoggerToken, useValue: new ZLoggerNest() };

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
  exports: [ZLoggerProvider, ZLoggerNest]
})
export class ZLoggerModule {}
