System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, BoletimController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            BoletimController = class BoletimController {
                constructor() {
                    this._boletins = new index_1.Boletins();
                    this._boletinsRecuperacao = new index_1.Boletins();
                    this._boletimView = new index_2.BoletimView('#boletimView');
                    this._mensagem = new index_2.MensagemView('#mensagemView');
                    this._mensagemWarning = new index_2.WarningView('#mensagemWarn');
                    this._recuperacaoView = new index_2.ProvaFinalView('#recuperacaoView');
                    this._inputAprov = $('#aprovados');
                    this._inputReprov = $('#reprovados');
                    this._inputMedia = $('#mediaTotal');
                    this._totalArovados = 0;
                    this._totalReprovados = 0;
                    this._mediaTotal = 0.0;
                    this._totalDeAlunos = 0;
                    this._inputNome = $('#nome-aluno');
                    this._inputNota1 = $('#nota-1');
                    this._inputNota2 = $('#nota-2');
                    this._inputFaltas = $('#faltas');
                    this._boletimView.update(this._boletins);
                    this._recuperacaoView.update(this._boletinsRecuperacao);
                }
                adiciona(event) {
                    event.preventDefault();
                    const boletim = new index_1.Boletim(this._inputNome.val(), parseFloat(this._inputNota1.val()), parseFloat(this._inputNota2.val()), parseInt(this._inputFaltas.val()));
                    this._boletins.adiciona(boletim);
                    this._mensagem.update("Notas lançadas com sucesso!");
                    this._boletimView.update(this._boletins);
                    this._totalDeAlunos++;
                    this.contaAprovadosEreprovados(boletim);
                    this._inputReprov.html(this._totalReprovados.toString());
                    this._inputAprov.html(this._totalArovados.toString());
                    this._inputMedia.html(this.mediaGeralDaTurma(boletim).toString());
                    console.log(this._boletins.paraArray());
                    if (boletim.aprovacaoOuReprovacao == "PROVA FINAL") {
                        this._mensagemWarning.update(`${boletim.nomeAluno} está de recuperação final`);
                        this.capturaBoletim(boletim);
                    }
                    return boletim;
                }
                recuperaNota() {
                    this.boletimCopia.setNotaFinal(parseFloat(this._inputNotaFinal.val()));
                    let m = parseFloat(this._inputNotaFinal.val());
                    console.log(`nota final: ${m}`);
                    this._boletinsRecuperacao.adiciona(this.boletimCopia);
                    console.log(this.boletimCopia);
                    console.log(this._boletinsRecuperacao.paraArray());
                    this._recuperacaoView.update(this._boletinsRecuperacao);
                    console.log(this.boletimCopia.aprovacaoOuReprovacao);
                    if (this.boletimCopia.recuperacao == "APROVADO") {
                        this._totalArovados++;
                        this._inputAprov.html(this._totalArovados.toString());
                    }
                    else {
                        console.log("entrei errado");
                        this._totalReprovados++;
                        this._inputReprov.html(this._totalReprovados.toString());
                    }
                }
                capturaBoletim(boletim) {
                    this._inputNotaFinal = $('#nota-final');
                    this.boletimCopia = boletim;
                }
                contaAprovadosEreprovados(boletim) {
                    if (boletim.aprovacaoOuReprovacao == "APROVADO") {
                        console.log('entrou aprov');
                        return this._totalArovados++;
                    }
                    else if (boletim.aprovacaoOuReprovacao == "REPROVADO") {
                        console.log('entrou reprov');
                        return this._totalReprovados++;
                    }
                    return 0;
                }
                mediaGeralDaTurma(boletim) {
                    this._mediaTotal += boletim.media;
                    let m = 0;
                    m = this._mediaTotal / (this._totalDeAlunos);
                    return m;
                }
            };
            exports_1("BoletimController", BoletimController);
        }
    };
});
