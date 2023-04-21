import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { UserModule } from './user-store/user.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    UserModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
