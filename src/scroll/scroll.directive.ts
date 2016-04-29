import {Directive, ElementRef, Input, OnInit} from 'angular2/core';
import { ChartObjService } from './scroll.obj.service';
declare var d3: any;

@Directive({
    selector: '[scroll]'
})

export class ScrollDirective implements OnInit {
    private _el: HTMLElement;

    @Input('scroll') scrollOption: any;
    constructor(el: ElementRef) {
        this._el = el.nativeElement;
    }

    ngOnInit() {
        this.scrollOption._el = this._el;
        this.scrollOption.downCallBack();
    }
}