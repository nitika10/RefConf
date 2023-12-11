/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comoil/ref_conf/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
