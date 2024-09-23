import { describe, it, expect } from "vitest";

import { extractHourFromTime } from "../timeUtils";

describe("extractHourFromTime", () => {
  it("should return the hour from the time string", () => {
    expect(extractHourFromTime("2024-09-23 06:00")).toBe(6);
  });
});
