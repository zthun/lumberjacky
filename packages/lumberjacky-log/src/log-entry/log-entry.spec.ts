import { describe, expect, it } from 'vitest';
import { ZLogEntryBuilder, ZLogLevel } from './log-entry';

describe('ZLogEntryBuilder', () => {
  function createTestTarget() {
    return new ZLogEntryBuilder();
  }

  describe('Properties', () => {
    it('should set the log level to catastrophe.', () => {
      expect(createTestTarget().info().catastrophe().build().level).toEqual(ZLogLevel.CATASTROPHE);
    });

    it('should set the log level to error.', () => {
      expect(createTestTarget().info().error().build().level).toEqual(ZLogLevel.ERROR);
    });

    it('should set the log level to warning.', () => {
      expect(createTestTarget().info().warning().build().level).toEqual(ZLogLevel.WARNING);
    });

    it('should set the log level to info.', () => {
      expect(createTestTarget().catastrophe().info().build().level).toEqual(ZLogLevel.INFO);
    });

    it('should set the log context', () => {
      const expected = 'describe:it';
      expect(createTestTarget().context(expected).build().context).toEqual(expected);
    });

    it('should set the message.', () => {
      const expected = 'Error Message';
      expect(createTestTarget().message(expected).build().message).toEqual(expected);
    });
  });
});
