import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinComponent } from './spin/spin.component';

@NgModule({
  declarations: [SpinComponent],
  imports: [CommonModule],
  exports: [SpinComponent],
})
export class SharedModule {}
