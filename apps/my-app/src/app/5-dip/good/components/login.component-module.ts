import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseAuthServiceModule } from '../adapters/firebase-auth.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, FormsModule, FirebaseAuthServiceModule, /* HttpAuthModule */],
  declarations: [LoginComponent],
})
export class LoginComponentModule {}
