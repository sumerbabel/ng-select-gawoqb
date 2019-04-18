import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
 selector: 'my-app',
 template: `
Selected User: {{selectedUser}}

<ng-select class="custom"
  [items]="users"
  [multiple]="true"
  [closeOnSelect]="false"
  placeholder="Search User"
  autofocus [(ngModel)]="selectedUser">

  <ng-template ng-multi-label-tmp></ng-template>

  <ng-template ng-option-tmp let-item="item" 
    let-index="index" let-item$="item$">
    <div class="custom-control custom-checkbox">
        <input type="checkbox" [ngModel]="item$.selected"
          class="custom-control-input"/>
        <label class="form-check-label ml-2 custom-control-label">{{item}}--</label>
    </div>
</ng-template>
</ng-select>
`
})
export class AppComponent {

 selectedUser: any;
 users = ['adam', 'nicole', 'alba'];

 constructor() {
 }

}