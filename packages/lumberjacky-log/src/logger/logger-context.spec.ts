import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ZLogEntryBuilder } from '../log-entry/log-entry';
import { IZLogger } from './logger';
import { ZLoggerContext } from './logger-context';
import { ZLoggerSilent } from './logger-silent';

describe('ZLoggerContext', () => {
  let context: string;
  let forward: IZLogger;

  const createTestTarget = () => new ZLoggerContext(context, forward);

  beforeEach(() => {
    context = 'Lumberjacky Log';
    forward = new ZLoggerSilent();
    vi.spyOn(forward, 'log');
  });

  it('should forward the entry with a new context if context is falsy', () => {
    // Arrange.
    const target = createTestTarget();
    const entry = new ZLogEntryBuilder().message('Log message').build();
    const expected = new ZLogEntryBuilder().copy(entry).context(context).build();
    // Act.
    target.log(entry);
    // Assert.
    expect(forward.log).toHaveBeenCalledWith(expected);
  });

  it('should forward the entry with the provided context if it has one', () => {
    // Arrange.
    const target = createTestTarget();
    const entry = new ZLogEntryBuilder().message('Log message').context('Custom context').build();
    // Act.
    target.log(entry);
    // Assert.
    expect(forward.log).toHaveBeenCalledWith(entry);
  });
});
