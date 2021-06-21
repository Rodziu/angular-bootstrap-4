import {Component, ViewChild} from '@angular/core';
import {BsModalDirective} from 'angular-bootstrap4';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    nav: string[] = [];
    navbar = false;
    @ViewChild('bsModalApi')
    bsModalApi?: BsModalDirective;

    modal = {
        exampleModal: false,
        nestedModal: false,
        backdrop: 'static' as 'static' | boolean,
        keyboard: false,
        preventModalOpen: false,
        beforeChange: (): boolean => {
            return !this.modal.preventModalOpen;
        }
    };

    dropdown = false;
    dropdown2 = false;
    dropdown3 = false;

    title = 'title<br/><strong>second line</strong>';
    tooltip = false;

    popover = false;
}
