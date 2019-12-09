import { Boletins, Boletim } from '../models/index';
import { Views } from './Views';



export class BoletimView extends Views<Boletins>{


    template(model: Boletins): string {
       return `<table class="table table-bordered">
       <thead class="thead-light">
           <tr>
               <th scope="col">Aluno</th>
               <th scope="col">Nota 1</th>
               <th scope="col">Nota 2</th>
               <th scope="col">Média</th>
               <th scope="col">Situação</th>
               <th scope="col">Faltas</th>
           </tr>
       </thead>
       <tbody>
            ${model.paraArray().map(boletim => 
                `
                    <tr>
                        <td>${boletim.nomeAluno}</td>
                        <td>${boletim.nota1}</td>
                        <td>${boletim.nota2}</td>
                        <td>${boletim.media}</td>
                        <td>${boletim.aprovacaoOuReprovacao}</td>
                        <td>${boletim.faltas}</td>
                    </tr>
                `
            ).join('')}
       </tbody>

   </table>
       
       `
    }





}