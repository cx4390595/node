var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();
ee.on("someEvent", function () {
    console.log("event has occured");
});

ee.emit("someEvent");
ee.on("someEvent", function () { console.log("event 1"); });
ee.on("someEvent", function () { console.log("event 2"); });
ee.on("someEvent", function () { console.log("event 3"); });
ee.on("someEvent", function () { console.log("event 4"); });
ee.on("someEvent", function () { console.log("event 5"); });
ee.on("someEvent", function () { console.log("event 6"); });
ee.on("someEvent", function () { console.log("event 7"); });
ee.on("someEvent", function () { console.log("event 8"); });
ee.on("someEvent", function () { console.log("event 9"); });
ee.on("someEvent", function () { console.log("event 10"); });
ee.on("someEvent", function () { console.log("event 11"); });

ee.emit("someEvent");