System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var index_1, InputNotaFinalView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            InputNotaFinalView = class InputNotaFinalView extends index_1.Views {
                template(model) {
                    return `
        <form class="form">
        <div class="form-group">
        <label for="valor">Nota Final:</label>
        <input id="nota-final" type="number" class="form-control" min="0.01" step="0.01" value="0.0" required />
        </div>
        </form>

        <button id="botao-submete-final" class="btn btn-info" type="submit">Lançar</button>

        `;
                }
            };
            exports_1("InputNotaFinalView", InputNotaFinalView);
        }
    };
});
