const target = require("./index.js");

test("first test", () => {
  const ret = target();
  expect(ret).toBe(1);
});
