System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var index_1, DadosDaTurmaView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            DadosDaTurmaView = class DadosDaTurmaView extends index_1.Views {
                template(model) {
                    return `<table class="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th scope="col">Total de Aprovados</th>
                <th scope="col">Total de Reprovados</th>
                <th scope="col">Média Geral</th>
            </tr>
        </thead>
        <tbody>
            
                 
                     <tr>
                         <td>${model._totalArovados}</td>
                         <td>${model._totalReprovados}</td>
                         <td>${model._mediaTotal}</td>
                     </tr>
                 }
        </tbody>
 
    </table>
        
        `;
                }
            };
            exports_1("DadosDaTurmaView", DadosDaTurmaView);
        }
    };
});
