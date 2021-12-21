/*
 * Bootstrap 4 plugin for Angular.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AngularBootstrap4Module} from 'angular-bootstrap4';
import {SectionDirective} from './section.directive';
import {FormsModule} from '@angular/forms';
import {TitleDirective} from './title.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        SectionDirective,
        TitleDirective
    ],
    imports: [
        AngularBootstrap4Module,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
