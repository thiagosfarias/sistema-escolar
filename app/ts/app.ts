import { BoletimController } from './controllers/BoletimController';

const boletimControl = new BoletimController();

$('.form').submit(boletimControl.adiciona.bind(boletimControl));

$('#botao-submete-final').click(boletimControl.recuperaNota.bind(boletimControl));