import { Component, OnInit, EventEmitter } from 'angular2/core';
import { Villian } from './villian';
import { VILLIANS } from './mock-villians'
// import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf } from 'angular2/common';
//import { PAGINATION_DIRECTIVES } from 'ng2-bootstrap';
//import { NG_TABLE_DIRECTIVES } from 'ng2-table';

@Component({
    selector: 'my-villians',
    templateUrl: 'app/villians.component.html',
    //directives: [NG_TABLE_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class VilliansComponent implements OnInit {
    public rows:Array<any> = [];
    public columns: Array<any> = [
        { title: 'Id', name: 'id' },
        { title: 'Name', name: 'name' },
        { title: 'Super Power', name: 'superPower' },
    ];
    
    constructor() { }

    ngOnInit() {
        this.onChangeTable();
    }
    
    onChangeTable(){
        this.rows = VILLIANS;
    }

}