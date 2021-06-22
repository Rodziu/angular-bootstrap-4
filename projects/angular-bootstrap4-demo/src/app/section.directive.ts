/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

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
