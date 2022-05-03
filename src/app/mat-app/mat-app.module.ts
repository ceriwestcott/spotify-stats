import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
@NgModule({
  declarations: [],
  imports: [MatInputModule, MatFormFieldModule, CommonModule],
  exports: [MatInputModule, MatFormFieldModule],
})
export class MatAppModule {}
