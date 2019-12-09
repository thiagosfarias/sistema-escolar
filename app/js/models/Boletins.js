System.register([], function (exports_1, context_1) {
    "use strict";
    var Boletins;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Boletins = class Boletins {
                constructor() {
                    this._boletins = [];
                }
                adiciona(boletim) {
                    this._boletins.push(boletim);
                }
                paraArray() {
                    return [].concat(this._boletins);
                }
            };
            exports_1("Boletins", Boletins);
        }
    };
});
