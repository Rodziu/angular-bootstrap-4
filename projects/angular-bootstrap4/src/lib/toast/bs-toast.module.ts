/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */
import {NgModule} from '@angular/core';
import {BsToastComponent} from './bs-toast.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        BsToastComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BsToastComponent
    ]
})
export class BsToastModule {
}
