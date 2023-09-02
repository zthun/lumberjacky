import { IZLogEntry } from '../log-entry/log-entry';
import { IZLogger } from './logger';

/**
 * Represents a logger that logs to multiple sources.
 */
export class ZLoggerComposite implements IZLogger {
  /**
   * Initializes a new instance of this object.
   *
   * @param _children -
   *        The collection of child loggers to log to.
   */
  public constructor(private readonly _children: IZLogger[]) {}

  /**
   * Logs the entry into every one of the child loggers.
   *
   * @param entry -
   *        The entry to log.
   */
  public log(entry: IZLogEntry): void {
    this._children.forEach((logger) => logger.log(entry));
  }
}
