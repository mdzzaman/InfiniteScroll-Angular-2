
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[scroll]',
    host: {
        '(scroll)': 'onScroll()'
    }
})

export class ScrollDirective implements OnInit {
    private _el: HTMLElement;

    @Input('scroll') scrollOption: any;
    constructor(el: ElementRef) {
        this._el = el.nativeElement;
    }

    ngOnInit() {
        this.scrollOption._el = this._el;
    }
    onScroll() {
        if (this._el.scrollTop + this._el.offsetHeight + this.scrollOption.threshold >= this._el.scrollHeight) {
            this.scrollOption.parent.trigger();
        }
    }
}