import { Boletim } from '../models/index';

export class Boletins {

    private _boletins: Boletim[] = [];

    adiciona(boletim: Boletim) {

        this._boletins.push(boletim);
    }

    paraArray(): Boletim[]{

        return ([] as Boletim[]).concat(this._boletins);
     }
}