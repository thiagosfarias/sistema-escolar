System.register(["./controllers/BoletimController"], function (exports_1, context_1) {
    "use strict";
    var BoletimController_1, boletimControl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BoletimController_1_1) {
                BoletimController_1 = BoletimController_1_1;
            }
        ],
        execute: function () {
            boletimControl = new BoletimController_1.BoletimController();
            $('.form').submit(boletimControl.adiciona.bind(boletimControl));
            $('#botao-submete-final').click(boletimControl.recuperaNota.bind(boletimControl));
        }
    };
});
