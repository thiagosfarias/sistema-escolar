import { Views } from "./Views";


export class MensagemView extends Views<string>{

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }


}