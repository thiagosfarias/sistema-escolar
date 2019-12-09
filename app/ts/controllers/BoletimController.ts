import { Boletins, Boletim } from '../models/index';
import { BoletimView, MensagemView, WarningView, ProvaFinalView } from '../views/index';




export class BoletimController {
    private _inputNome: JQuery;
    private _inputNota1: JQuery;
    private _inputNota2: JQuery;
    private _inputFaltas: JQuery;
    private _boletins: Boletins = new Boletins();
    private _boletinsRecuperacao: Boletins = new Boletins();
    private _boletimView = new BoletimView('#boletimView');
    private _mensagem = new MensagemView('#mensagemView');
    private _mensagemWarning = new WarningView('#mensagemWarn');
    private _recuperacaoView = new ProvaFinalView('#recuperacaoView');
    private _inputAprov: JQuery = $('#aprovados');
    private _inputReprov: JQuery = $('#reprovados');
    private _inputMedia: JQuery = $('#mediaTotal');
    _totalArovados: number = 0;
    _totalReprovados: number = 0;
    _mediaTotal: number = 0.0;
    private _inputNotaFinal: JQuery;
    _totalDeAlunos: number = 0;
    private boletimCopia: Boletim;




    constructor() {
        this._inputNome = $('#nome-aluno');
        this._inputNota1 = $('#nota-1');
        this._inputNota2 = $('#nota-2');
        this._inputFaltas = $('#faltas');
        this._boletimView.update(this._boletins);
        this._recuperacaoView.update(this._boletinsRecuperacao);

    }

    adiciona(event: Event): Boletim {
        event.preventDefault();


        const boletim = new Boletim(<string>this._inputNome.val(),
            parseFloat(<string>this._inputNota1.val()),
            parseFloat(<string>this._inputNota2.val()),
            parseInt(<string>this._inputFaltas.val())
        );

      
        this._boletins.adiciona(boletim);
        this._mensagem.update("Notas lançadas com sucesso!");
        this._boletimView.update(this._boletins);
        this._totalDeAlunos++;
        this.contaAprovadosEreprovados(boletim);
        this._inputReprov.html(this._totalReprovados.toString());
        this._inputAprov.html(this._totalArovados.toString());
        this._inputMedia.html(this.mediaGeralDaTurma(boletim).toString());
        console.log(this._boletins.paraArray());
        if(boletim.aprovacaoOuReprovacao == "PROVA FINAL"){
            this._mensagemWarning.update(`${boletim.nomeAluno} está de recuperação final`)
            this.capturaBoletim(boletim);
        }
        


        return boletim;
    }





    recuperaNota() {
        this.boletimCopia.setNotaFinal(parseFloat(<string>this._inputNotaFinal.val()));
        let m = parseFloat(<string>this._inputNotaFinal.val());
        console.log(`nota final: ${m}`);
        this._boletinsRecuperacao.adiciona(this.boletimCopia);
        console.log(this.boletimCopia);
        console.log(this._boletinsRecuperacao.paraArray())
        this._recuperacaoView.update(this._boletinsRecuperacao);
        console.log(this.boletimCopia.aprovacaoOuReprovacao); 
        if(this.boletimCopia.recuperacao == "APROVADO"){
            this._totalArovados++;
            this._inputAprov.html(this._totalArovados.toString());
        } else {
            console.log("entrei errado")
            this._totalReprovados++;
            this._inputReprov.html(this._totalReprovados.toString());
        }
    }

    capturaBoletim(boletim: Boletim){
        this._inputNotaFinal = $('#nota-final');
        this.boletimCopia = boletim;
    }

    contaAprovadosEreprovados(boletim: Boletim): number {

        if (boletim.aprovacaoOuReprovacao == "APROVADO") {
            console.log('entrou aprov');

            return this._totalArovados++;

        } else if (boletim.aprovacaoOuReprovacao == "REPROVADO") {
            console.log('entrou reprov');

            return this._totalReprovados++;
        }

        return 0;
    }


    mediaGeralDaTurma(boletim: Boletim): number {
        this._mediaTotal += boletim.media;
        let m = 0;
        m = this._mediaTotal / (this._totalDeAlunos);
        return m;
    }

}