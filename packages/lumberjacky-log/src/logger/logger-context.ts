import { IZLogEntry, ZLogEntryBuilder } from '../log-entry/log-entry';
import { IZLogger } from './logger';

/**
 * A logger that sets up a default context in the case that one is not given in the entry.
 */
export class ZLoggerContext implements IZLogger {
  /**
   * Initializes a new instance of this object.
   *
   * @param _context -
   *        The default context if one is not provided in the entry.
   * @param _forward -
   *        The logger to forward to.
   */
  public constructor(
    private _context: string,
    private _forward: IZLogger
  ) {}

  public log(entry: IZLogEntry): void {
    const clone = new ZLogEntryBuilder()
      .copy(entry)
      .context(entry.context || this._context)
      .build();
    return this._forward.log(clone);
  }
}
