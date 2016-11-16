import { Component , OnInit} from '@angular/core';
import {Select2TemplateFunction , Select2OptionData} from 'ng2-select2/ng2-select2';
import {Http} from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    private startValue:string = 'car3';
    private selected:string = "";
    my : any[];
    test: Observable<Select2OptionData[]>;
    constructor(private http : Http)
    {
    }

    ngOnInit()
    {
        this.test = this.http.get("https://jsonplaceholder.typicode.com/users")
            .map(success => success.json())
            .map((users) => {
                return users.map((user) => {
                    return {id : user.id , text : user.name};
                });
            })
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

    public changed(e:any):void
    {
        this.selected = e.value;
    }
}