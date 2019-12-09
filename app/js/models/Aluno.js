System.register([], function (exports_1, context_1) {
    "use strict";
    var Aluno;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Aluno = class Aluno {
                constructor(boletim) {
                    this._boletim = boletim;
                }
            };
            exports_1("Aluno", Aluno);
        }
    };
});
