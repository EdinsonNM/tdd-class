import { getFormattedValue } from "../utils";

test("should return format value", () => {
	expect(getFormattedValue("1024.0")).toBe("1,024.0");
});
