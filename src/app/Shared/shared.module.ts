import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [SidebarComponent,NavbarComponent],
  imports: [
    CommonModule,
    MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatIconModule
  ],
  exports: [SidebarComponent,NavbarComponent,
    MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatIconModule
  ]
})
export class SharedModule { }
