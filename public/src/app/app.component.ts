import { Component, ViewContainerRef } from '@angular/core';

import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
    moduleId: module.id,
    selector: 'billing-app',
    templateUrl: 'app-main.html',
})
export class AppComponent {
    constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }
}
