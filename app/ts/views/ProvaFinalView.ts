import { Views } from "./Views"
import { Boletins } from "../models/index"

export class ProvaFinalView extends Views<Boletins>{
    template(model: Boletins): string{
        return `<table class="table table-bordered">
       <thead class="thead-light">
           <tr>
               <th scope="col">Aluno</th>
               <th scope="col">Nota 1</th>
               <th scope="col">Nota 2</th>
               <th scope="col" color="dark"><strong>Prova Final</strong></th>
               <th scope="col">Situação</th>
           </tr>
       </thead>
       <tbody>
            ${model.paraArray().map(boletim => 
                `
                    <tr>
                        <td>${boletim.nomeAluno}</td>
                        <td>${boletim.nota1}</td>
                        <td>${boletim.nota2}</td>
                        <td>${boletim.notaFinal}</td>
                        <td>${boletim.recuperacao}</td>
                    </tr>
                `
            ).join('')}
       </tbody>
    </table>
       
       `
    }
}

