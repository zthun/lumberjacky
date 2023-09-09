import { Module, Provider } from '@nestjs/common';
import { ZLoggerNest } from './logger-nest';

export const ZLoggerToken = Symbol();

const ZLoggerProvider: Provider = { provide: ZLoggerToken, useValue: new ZLoggerNest() };

@Module({
  providers: [ZLoggerProvider, ZLoggerNest],
  exports: [ZLoggerProvider, ZLoggerNest]
})
export class ZLoggerModule {}
