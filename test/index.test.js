const $ = require("jquery");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("html1", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  it("h2", () => {
    expect($("h2").text()).toBe("good!");
  });

  it("h3", () => {
    expect($("h3").text()).toBe("다음장으로");
  });
});
