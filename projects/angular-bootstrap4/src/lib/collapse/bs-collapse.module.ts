/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {NgModule} from '@angular/core';
import {BsCollapseDirective} from './bs-collapse.directive';
import {BsCollapseGroupDirective} from './bs-collapse-group.directive';

@NgModule({
    declarations: [
        BsCollapseDirective,
        BsCollapseGroupDirective
    ],
    imports: [
    ],
    exports: [
        BsCollapseDirective,
        BsCollapseGroupDirective
    ]
})
export class BsCollapseModule {
}
