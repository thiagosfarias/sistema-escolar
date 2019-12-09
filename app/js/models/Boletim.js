System.register([], function (exports_1, context_1) {
    "use strict";
    var Boletim, Situacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Boletim = class Boletim {
                constructor(nomeAluno, nota1, nota2, faltas, notaFinal = 0) {
                    this.nomeAluno = nomeAluno;
                    this.nota1 = nota1;
                    this.nota2 = nota2;
                    this.faltas = faltas;
                    this.nomeAluno = nomeAluno;
                    this.nota1 = nota1;
                    this.nota2 = nota2;
                    this.faltas = faltas;
                    this.notaFinal = notaFinal;
                }
                get media() {
                    return (this.nota1 + this.nota2) / 2;
                }
                situacao() {
                    if ((this.nota1 + this.nota2) / 2 >= 7) {
                        return Situacao.Aprovado;
                    }
                    else if ((this.nota1 + this.nota2) / 2 < 3) {
                        return Situacao.Reprovado;
                    }
                    else {
                        return Situacao.Final;
                    }
                }
                frequencia() {
                    return this.faltas > 22;
                }
                get aprovacaoOuReprovacao() {
                    if (this.situacao() == 2 && !(this.frequencia())) {
                        return "PROVA FINAL";
                    }
                    else if ((this.situacao() == 1) && !(this.frequencia())) {
                        return "APROVADO";
                    }
                    return "REPROVADO";
                }
                setNotaFinal(nota) {
                    this.notaFinal = nota;
                }
                get recuperacao() {
                    if (this.notaFinal >= 7) {
                        return "APROVADO";
                    }
                    return "REPROVADO";
                }
            };
            exports_1("Boletim", Boletim);
            (function (Situacao) {
                Situacao[Situacao["Reprovado"] = 0] = "Reprovado";
                Situacao[Situacao["Aprovado"] = 1] = "Aprovado";
                Situacao[Situacao["Final"] = 2] = "Final";
            })(Situacao || (Situacao = {}));
        }
    };
});
