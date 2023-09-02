import { noop } from 'lodash';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ZLogEntryBuilder } from '../log-entry/log-entry';
import { ZLoggerConsole } from './logger-console';

describe('ZLoggerConsole', () => {
  let msg: string;
  let cons: Console;

  function createTestTarget() {
    return new ZLoggerConsole(cons);
  }

  beforeEach(() => {
    msg = 'Something is being logged.';
    cons = console;
  });

  describe('Levels', () => {
    it('should log an info message to the console.', () => {
      // Arrange
      const target = createTestTarget();
      const entry = new ZLogEntryBuilder().message(msg).info().build();
      vi.spyOn(cons, 'log').mockImplementation(noop);
      // Act
      target.log(entry);
      // Assert
      expect(cons.log).toHaveBeenCalledWith(`[${entry.created.toLocaleString()}]: ${entry.message}`);
    });

    it('should log a warning message to the console.', () => {
      // Arrange
      const target = createTestTarget();
      const entry = new ZLogEntryBuilder().message(msg).warning().build();
      vi.spyOn(cons, 'warn').mockImplementation(noop);
      // Act
      target.log(entry);
      // Assert
      expect(cons.warn).toHaveBeenCalledWith(`[${entry.created.toLocaleString()}]: ${entry.message}`);
    });

    it('should log a error message to the console.', () => {
      // Arrange
      const target = createTestTarget();
      const entry = new ZLogEntryBuilder().message(msg).error().build();
      vi.spyOn(cons, 'error').mockImplementation(noop);
      // Act
      target.log(entry);
      // Assert
      expect(cons.error).toHaveBeenCalledWith(`[${entry.created.toLocaleString()}]: ${entry.message}`);
    });

    it('should log a catastrophe message to the console.', () => {
      // Arrange
      const target = createTestTarget();
      const entry = new ZLogEntryBuilder().message(msg).catastrophe().build();
      vi.spyOn(cons, 'error').mockImplementation(noop);
      // Act
      target.log(entry);
      // Assert
      expect(cons.error).toHaveBeenCalledWith(
        `[${entry.created.toLocaleString()}]: ${ZLoggerConsole.FATAL} - ${entry.message}`
      );
    });
  });
});
