/*
 * Bootstrap 4 plugin for AngularJS.
 * Copyright (c) 2016-2021 Rodziu <mateusz.rohde@gmail.com>
 * License: MIT
 */

import {AfterContentInit, ContentChildren, Directive, QueryList} from '@angular/core';
import {BsCollapseDirective} from './bs-collapse.directive';

@Directive({
    selector: '[bsCollapseGroup]'
})
export class BsCollapseGroupDirective implements AfterContentInit {
    @ContentChildren(BsCollapseDirective, {descendants: true}) children!: QueryList<BsCollapseDirective>;

    ngAfterContentInit(): void {
        this.children.forEach((c) => {
            c.opened.subscribe(() => {
                this.expand(c);
            });
        })
    }

    expand(calee: BsCollapseDirective): void {
        this.children
            .filter((c) => c !== calee)
            .forEach((c) => {
                setTimeout(() => {
                    c.bsCollapseChange.emit(true);
                });
            });
    }
}
