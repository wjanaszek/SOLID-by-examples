import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseAuthServiceModule } from '../adapters/firebase-auth.module';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [CommonModule,FormsModule, FirebaseAuthServiceModule],
  declarations: [SignUpComponent],
})
export class SignUpComponentModule {}
