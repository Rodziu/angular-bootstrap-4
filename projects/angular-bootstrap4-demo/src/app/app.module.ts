import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AngularBootstrap4Module} from 'angular-bootstrap4';
import {SectionDirective} from './section.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        SectionDirective
    ],
    imports: [
        AngularBootstrap4Module,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
