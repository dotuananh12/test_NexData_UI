import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {EditorModule} from 'primeng/editor';
import {InputNumberModule} from 'primeng/inputnumber';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core'
//
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';





export const mainRoutes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component:HomeComponent
      },
    ],
    //
  },
];

@NgModule({
  declarations: [
  AdminComponent,
  HomeComponent,

  ],
  imports: [   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(mainRoutes),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    InputTextareaModule,
    InputMaskModule,
    // CKEditorModule,
    EditorModule,
    InputNumberModule,
  ],
  exports: [RouterModule],
  
 
})
export class AdminModule { }
