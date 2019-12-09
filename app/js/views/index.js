System.register(["./BoletimView", "./MensagemView", "./WarningView", "./ProvaFinalView", "./Views"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (BoletimView_1_1) {
                exportStar_1(BoletimView_1_1);
            },
            function (MensagemView_1_1) {
                exportStar_1(MensagemView_1_1);
            },
            function (WarningView_1_1) {
                exportStar_1(WarningView_1_1);
            },
            function (ProvaFinalView_1_1) {
                exportStar_1(ProvaFinalView_1_1);
            },
            function (Views_1_1) {
                exportStar_1(Views_1_1);
            }
        ],
        execute: function () {
        }
    };
});
