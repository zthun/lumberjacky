/**
 * The log level.
 */
export enum ZLogLevel {
  /**
   * A fatal error.
   *
   * Someone's pager is going off at 2:00 in the
   * morning because the nuclear codes have gone off
   * and missiles have been launched.
   */
  CATASTROPHE = 0,

  /**
   * A normal error that cause usually be recovered from.
   *
   * May require a fire being put out or some immediate
   * response, but it is not world ending.
   */
  ERROR = 1,

  /**
   * Nothing is really totally wrong.
   *
   * Should probably not be ignored and
   * action should be taken, but it's not
   * serious enough to call the fire
   * department.
   */
  WARNING = 2,

  /**
   * Some information that's good to know.
   *
   * Analytic logs are in this zone and general
   * information goes in this zone.  Debug as
   * well, goes into this zone.
   *
   * It is normally best to avoid this log level
   * unless it's really important to display.
   */
  INFO = 3
}

/**
 * Represents a log entry.
 */
export interface IZLogEntry {
  /**
   * The log context.
   *
   * This will usually be a friendly name of a function
   * or class where this log took place.
   */
  context?: string;

  /**
   * The log level.
   */
  level: ZLogLevel;

  /**
   * The creation of this entry.
   */
  created: Date | string;

  /**
   * The log message.
   */
  message: string;
}

/**
 * Represents a builder for a log entry
 */
export class ZLogEntryBuilder {
  private _entry: IZLogEntry;

  /**
   * Initializes a new instance of this object.
   */
  public constructor() {
    this._entry = {
      level: ZLogLevel.ERROR,
      message: '',
      created: new Date().toJSON()
    };
  }

  /**
   * Sets the log level.
   *
   * @param level -
   *        The log level.
   *
   * @returns
   *        This object.
   */
  public level(level: ZLogLevel) {
    this._entry.level = level;
    return this;
  }

  /**
   * Sets the log level to catastrophe.
   *
   * @returns
   *        This object.
   */
  public catastrophe = this.level.bind(this, ZLogLevel.CATASTROPHE);

  /**
   * Sets the log level to error.
   *
   * @returns
   *        This object.
   */
  public error = this.level.bind(this, ZLogLevel.ERROR);

  /**
   * Sets the log level to warning.
   *
   * @returns
   *        This object.
   */
  public warning = this.level.bind(this, ZLogLevel.WARNING);

  /**
   * Sets the log level to info.
   *
   * @returns
   *        This object.
   */
  public info = this.level.bind(this, ZLogLevel.INFO);

  /**
   * Sets the context of the entry.
   *
   * @param ctx -
   *        The entry context.
   *
   * @returns
   *        This object.
   */
  public context(ctx: string | undefined): this {
    this._entry.context = ctx;
    return this;
  }

  /**
   * Sets the message.
   *
   * @param msg -
   *        The message to log.
   *
   * @returns
   *        This object.
   */
  public message(msg: string): this {
    this._entry.message = msg;
    return this;
  }

  /**
   * Copies the other entry into the current entry.
   *
   * @param other -
   *        The entry to copy.
   *
   * @returns
   *        This object.
   */
  public copy(other: IZLogEntry): this {
    this._entry = structuredClone(other);
    return this;
  }

  /**
   * Returns a copy of the built log entry.
   *
   * @returns
   *        The built log entry.
   */
  public build(): IZLogEntry {
    return { ...this._entry };
  }
}
