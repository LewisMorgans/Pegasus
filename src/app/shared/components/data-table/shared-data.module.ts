import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ],
  exports: [DataTableComponent]
})
export class SharedDataTableModule { }
