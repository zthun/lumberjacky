import { noop } from "lodash-es";
import { IZLogEntry } from "../log-entry/log-entry.mjs";
import { IZLogger } from "./logger.mjs";

/**
 * A silent logger.  This logger does nothing.
 */
export class ZLoggerSilent implements IZLogger {
  public log: (_: IZLogEntry) => void = noop;
}
