import { noop } from "lodash-es";

import type { IZLogEntry } from "../log-entry/log-entry.mjs";
import type { IZLogger } from "./logger.mjs";

/**
 * A silent logger.  This logger does nothing.
 */
export class ZLoggerSilent implements IZLogger {
  public log: (_: IZLogEntry) => void = noop;
}
