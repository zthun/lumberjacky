import { Injectable, Logger } from '@nestjs/common';
import { IZLogEntry, IZLogger, ZLogLevel } from '@zthun/lumberjacky-log';

/**
 * Represents the logger for nestjs.
 *
 * You will import this through the {@link ZLoggerModule} object.
 *
 * You can use this in conjunction with the {@link @zthun/lumberjacky-log#ZLoggerContext} object.
 *
 *
 * @example
 *
 * ```ts
 * import { Injectable, Inject } from '@nestjs/common';
 * import { LoggerToken } from '@zthun/lumberjacky-nest';
 *
 * @Injectable
 * public class MyService {
 *     private _logger: IZLogger;
 *
 *     public constructor(@Inject(LoggerToken) logger: IZLogger) {
 *         this._logger = new ZLoggerContext('MyService', logger);
 *     }
 * }
 * ```
 */
@Injectable()
export class ZLoggerNest implements IZLogger {
  private _logger = new Logger();

  private _levelMap: Record<ZLogLevel, (l: Logger, entry: IZLogEntry) => void> = {
    [ZLogLevel.CATASTROPHE]: (l, e) => l.fatal(e.message, e.context),
    [ZLogLevel.ERROR]: (l, e) => l.error(e.message, e.context),
    [ZLogLevel.INFO]: (l, e) => l.log(e.message, e.context),
    [ZLogLevel.WARNING]: (l, e) => l.warn(e.message, e.context)
  };

  public log(entry: IZLogEntry): void {
    this._levelMap[entry.level](this._logger, entry);
  }
}
