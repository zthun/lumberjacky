import type { Client, SeverityLevel } from "@sentry/core";
import { ZLogEntryBuilder, ZLogLevel } from "@zthun/lumberjacky-log";
import type { Mocked } from "vitest";
import { beforeEach, describe, expect, it } from "vitest";
import { mock } from "vitest-mock-extended";

import { ZLoggerSentry } from "./logger-sentry.mjs";

describe("ZLoggerSentry", () => {
  let client: Mocked<Client>;

  beforeEach(() => {
    client = mock<Client>();
  });

  const createTestTarget = () => new ZLoggerSentry(client);

  describe("Severity", () => {
    const shouldSendLogSeverity = (
      expected: SeverityLevel,
      level: ZLogLevel,
    ) => {
      // Arrange.
      const entry = new ZLogEntryBuilder()
        .level(level)
        .message("An event happened")
        .build();
      const target = createTestTarget();

      // Act.
      target.log(entry);

      // Assert.
      expect(client.captureEvent).toHaveBeenCalledWith(
        expect.objectContaining({ level: expected }),
      );
    };

    it("should send a fatal log entry for a catastrophe", () => {
      shouldSendLogSeverity("fatal", ZLogLevel.CATASTROPHE);
    });

    it("should send an error log entry for a error", () => {
      shouldSendLogSeverity("error", ZLogLevel.ERROR);
    });

    it("should send a warning log entry for a warning", () => {
      shouldSendLogSeverity("warning", ZLogLevel.WARNING);
    });

    it("should send a log entry for a info", () => {
      shouldSendLogSeverity("info", ZLogLevel.INFO);
    });
  });

  it("should send the correct message", () => {
    // Arrange.
    const expected = "An event happened";
    const entry = new ZLogEntryBuilder().message("An event happened").build();
    const target = createTestTarget();

    // Act.
    target.log(entry);

    // Assert.
    expect(client.captureEvent).toHaveBeenCalledWith(
      expect.objectContaining({ message: expected }),
    );
  });
});
