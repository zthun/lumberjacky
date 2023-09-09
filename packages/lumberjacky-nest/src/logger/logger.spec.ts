import { INestApplication, Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { IZLogger, ZLogEntryBuilder, ZLogLevel } from '@zthun/lumberjacky-log';
import { Mocked, afterEach, beforeEach, describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';
import { ZLoggerModule, ZLoggerToken } from './logger-module';

describe('ZLoggerNest', () => {
  describe('ZVaultModule', () => {
    let _target: INestApplication<any>;
    let logger: Mocked<Logger>;

    const createTestTarget = async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({ imports: [ZLoggerModule] })
        .setLogger(logger)
        .compile();

      _target = moduleFixture.createNestApplication();
      await _target.init();
      return _target.get<Symbol, IZLogger>(ZLoggerToken);
    };

    beforeEach(() => {
      logger = mock<Logger>();
    });

    afterEach(async () => {
      await _target?.close();
    });

    const shouldLogAtLevel = async (
      expected: (message: any, context?: string | undefined) => void,
      level: ZLogLevel
    ) => {
      // Arrange.
      const target = await createTestTarget();
      const entry = new ZLogEntryBuilder()
        .context('Lumberjacky Nest')
        .level(level)
        .message('A test logging message')
        .build();
      // Act.
      target.log(entry);
      // Assert.
      expect(expected).toHaveBeenCalledWith(entry.message, entry.context);
    };

    it('should log a fatal for catastrophe', async () => {
      await shouldLogAtLevel(logger.fatal, ZLogLevel.CATASTROPHE);
    });

    it('should log an error for error', async () => {
      await shouldLogAtLevel(logger.error, ZLogLevel.ERROR);
    });

    it('should log a warn for warning', async () => {
      await shouldLogAtLevel(logger.warn, ZLogLevel.WARNING);
    });

    it('should log for info', async () => {
      await shouldLogAtLevel(logger.log, ZLogLevel.INFO);
    });
  });
});
