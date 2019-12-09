System.register(["./Views"], function (exports_1, context_1) {
    "use strict";
    var Views_1, WarningView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Views_1_1) {
                Views_1 = Views_1_1;
            }
        ],
        execute: function () {
            WarningView = class WarningView extends Views_1.Views {
                template(model) {
                    return `<div class="alert alert-warning" role="alert">
        <strong>Atenção!</strong> ${model}
        </div>
        `;
                }
            };
            exports_1("WarningView", WarningView);
        }
    };
});
