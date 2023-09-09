import { Logger } from '@nestjs/common';
import { IZLogEntry, IZLogger, ZLogLevel } from '@zthun/lumberjacky-log';

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
