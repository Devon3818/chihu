var exec = require("cordova/exec");

var Install = function () {
    this.name = "Install";
};

Install.prototype.install = function (path, func) {
	exec(func, null, "Install", "install", [path]);
};

module.exports = new Install();

