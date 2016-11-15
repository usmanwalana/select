import { Component } from '@angular/core';
import { Select2TemplateFunction, Select2OptionData } from "ng2-select2/ng2-select2";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    private startValue:string = 'car3';
    private selected:string = "";

    private test: Select2OptionData[] = [
            {
                id: '0',
                text: 'Cars',
                children: [
                    {
                        id: 'car1',
                        text: 'Car 1'
                    },
                    {
                        id: 'car2',
                        text: 'Car 2'
                    },
                    {
                        id: 'car3',
                        text: 'Car 3'
                    }
                ]
            },
            {
                id: '0',
                text: 'Planes',
                children: [
                    {
                        id: 'plane1',
                        text: 'Plane 1'
                    },
                    {
                        id: 'plane2',
                        text: 'Plane 2'
                    },
                    {
                        id: 'plane3',
                        text: 'Plane 3'
                    }
                ]
            }
        ];

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

    public changed(e:any):void
    {
        this.selected = e.value;
    }
}