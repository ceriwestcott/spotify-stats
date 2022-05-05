import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { MatLabel } from '@angular/material/form-field';
@NgModule({
  declarations: [],
  imports: [MatInputModule, MatButtonToggleModule,MatFormFieldModule, MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, CommonModule],
  exports: [MatInputModule, MatFormFieldModule,MatButtonToggleModule, MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule],
})
export class MatAppModule {}
