import { describe, expect, it } from "vitest";
import { ZLogEntryBuilder } from "../log-entry/log-entry.mjs";
import { ZLoggerSilent } from "./logger-silent.mjs";

describe("LoggerSilent", () => {
  const createTestTarget = () => new ZLoggerSilent();

  it("should run logs silently", () => {
    // Arrange.
    const target = createTestTarget();
    // Act.
    target.log(new ZLogEntryBuilder().build());
    // Assert.
    expect(true).toBeTruthy();
  });
});
