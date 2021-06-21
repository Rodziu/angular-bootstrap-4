/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {NgModule} from '@angular/core';
import {BsCollapseDirective} from './bs-collapse.directive';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsCollapseGroupDirective} from './bs-collapse-group.directive';

@NgModule({
    declarations: [
        BsCollapseDirective,
        BsCollapseGroupDirective
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule
    ],
    exports: [
        BsCollapseDirective,
        BsCollapseGroupDirective
    ]
})
export class BsCollapseModule {
}
