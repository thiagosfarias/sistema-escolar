System.register(["./Views"], function (exports_1, context_1) {
    "use strict";
    var Views_1, BoletimView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Views_1_1) {
                Views_1 = Views_1_1;
            }
        ],
        execute: function () {
            BoletimView = class BoletimView extends Views_1.Views {
                template(model) {
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
            ${model.paraArray().map(boletim => `
                    <tr>
                        <td>${boletim.nomeAluno}</td>
                        <td>${boletim.nota1}</td>
                        <td>${boletim.nota2}</td>
                        <td>${boletim.media}</td>
                        <td>${boletim.aprovacaoOuReprovacao}</td>
                        <td>${boletim.faltas}</td>
                    </tr>
                `).join('')}
       </tbody>

   </table>
       
       `;
                }
            };
            exports_1("BoletimView", BoletimView);
        }
    };
});
