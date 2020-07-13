var url = "https://github.com/Jack5079";
var start =
  (process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open");
require("child_process").exec(start + " " + url);
