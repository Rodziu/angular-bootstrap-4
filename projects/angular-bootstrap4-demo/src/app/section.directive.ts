import {Directive, Host, Input, OnInit} from '@angular/core';
import {AppComponent} from './app.component';

@Directive({
    selector: 'section',
})
export class SectionDirective implements OnInit {
    @Input() id = '';

    constructor(
        @Host() private app: AppComponent
    ) {
    }

    ngOnInit(): void {
        this.app.nav.push(this.id);
    }
}
