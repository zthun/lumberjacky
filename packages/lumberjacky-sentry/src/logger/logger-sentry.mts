import { Client, SeverityLevel } from '@sentry/types';
import { IZLogEntry, IZLogger, ZLogLevel } from '@zthun/lumberjacky-log';

export class ZLoggerSentry implements IZLogger {
  private static readonly SeverityMap: Record<ZLogLevel, SeverityLevel> = Object.freeze({
    [ZLogLevel.CATASTROPHE]: 'fatal',
    [ZLogLevel.ERROR]: 'error',
    [ZLogLevel.WARNING]: 'warning',
    [ZLogLevel.INFO]: 'info'
  });

  public constructor(private _client: Client) {}

  public log(entry: IZLogEntry): void {
    this._client.captureEvent({
      message: entry.message,
      level: ZLoggerSentry.SeverityMap[entry.level],
      extra: {
        context: entry.context
      }
    });
  }
}
