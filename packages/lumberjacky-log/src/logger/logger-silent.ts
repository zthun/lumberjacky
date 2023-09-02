import { noop } from 'lodash';
import { IZLogEntry } from '../log-entry/log-entry';
import { IZLogger } from './logger';

/**
 * A silent logger.  This logger does nothing.
 */
export class ZLoggerSilent implements IZLogger {
  public log: (_: IZLogEntry) => void = noop;
}
