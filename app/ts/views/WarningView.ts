import { Views } from './Views';

export class WarningView extends Views<string>{
    template(model: string): string{
        return `<div class="alert alert-warning" role="alert">
        <strong>Atenção!</strong> ${model}
        </div>
        `;
    }
}