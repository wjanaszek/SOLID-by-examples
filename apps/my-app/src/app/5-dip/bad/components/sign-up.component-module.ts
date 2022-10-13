import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [CommonModule,FormsModule],
  declarations: [SignUpComponent],
})
export class SignUpComponentModule {}
