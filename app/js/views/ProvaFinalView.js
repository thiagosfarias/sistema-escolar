System.register(["./Views"], function (exports_1, context_1) {
    "use strict";
    var Views_1, ProvaFinalView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Views_1_1) {
                Views_1 = Views_1_1;
            }
        ],
        execute: function () {
            ProvaFinalView = class ProvaFinalView extends Views_1.Views {
                template(model) {
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
            ${model.paraArray().map(boletim => `
                    <tr>
                        <td>${boletim.nomeAluno}</td>
                        <td>${boletim.nota1}</td>
                        <td>${boletim.nota2}</td>
                        <td>${boletim.notaFinal}</td>
                        <td>${boletim.recuperacao}</td>
                    </tr>
                `).join('')}
       </tbody>
    </table>
       
       `;
                }
            };
            exports_1("ProvaFinalView", ProvaFinalView);
        }
    };
});
