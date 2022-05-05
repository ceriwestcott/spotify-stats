import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatCard, MatCardModule} from '@angular/material/card';

import { MatLabel } from '@angular/material/form-field';
@NgModule({
  declarations: [],
  imports: [MatInputModule, MatFormFieldModule, MatCardModule, CommonModule],
  exports: [MatInputModule, MatFormFieldModule, MatCardModule],
})
export class MatAppModule {}
