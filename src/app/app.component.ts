import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    private startValue:string = 'car3';
    private selected:string = "";

    constructor(public data:AppService)
    {
    }

    // function for result template
    public templateResult:Select2TemplateFunction = (state:Select2OptionData):JQuery | string =>
    {
        if (!state.id)
        {
            return state.text;
        }

        let image = '<span class="image"></span>';

        if (state.additional.image)
        {
            image = '<span class="image"><img src="' + state.additional.image + '"</span>';
        }

        return jQuery('<span><b>' + state.additional.winner + '.</b> ' + image + ' ' + state.text + '</span>');
    }

    // function for selection tempalte
    public templateSelection:Select2TemplateFunction = (state:Select2OptionData):JQuery | string =>
    {
        if (!state.id)
        {
            return state.text;
        }

        return jQuery('<span><b>' + state.additional.winner + '.</b> ' + state.text + '</span>');
    }

    public changed(e:Object):void
    {
        this.selected = e.value;
    }
}