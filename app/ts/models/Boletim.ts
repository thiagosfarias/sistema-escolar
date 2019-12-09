export class Boletim{
    
    notaFinal: number;

    constructor(readonly nomeAluno: string, readonly nota1: number, readonly nota2: number, readonly faltas: number, notaFinal: number =  0){
        this.nomeAluno = nomeAluno;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.faltas = faltas;
        this.notaFinal = notaFinal;

    }

    get media(): number{
        return (this.nota1 + this.nota2)/2;
    }

    situacao(): Situacao{
        if((this.nota1 + this.nota2)/2 >= 7){
            return Situacao.Aprovado;
        } else if ((this.nota1 + this.nota2)/2 < 3){
            return Situacao.Reprovado;
        } else {
            return Situacao.Final;
        }
    }

    frequencia(): boolean{
        return this.faltas > 22;
    }

    get aprovacaoOuReprovacao(): string {
        if(this.situacao() == 2 && !(this.frequencia())){
            return "PROVA FINAL";
        } else if((this.situacao() == 1) && !(this.frequencia())){
            return "APROVADO";
        }
        return "REPROVADO";
    }

    setNotaFinal(nota: number){
        this.notaFinal = nota;
    }

    get recuperacao(): string{
        if(this.notaFinal >= 7){
            return "APROVADO";
        }
        return "REPROVADO";
    }



}

enum Situacao{
    Reprovado,
    Aprovado,
    Final
}

