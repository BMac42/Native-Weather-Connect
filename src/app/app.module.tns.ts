import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@src/app/app.component';
import { MainComponent } from '@src/app/main/main.component';
import { PreLoaderComponent } from '@src/app/pre-loader/pre-loader.component';
import { DetailedComponent } from '@src/app/main/detailed/detailed.component';
import { SkyconComponent } from '@src/app/skycon/skycon.component';
import { WeekComponent } from '@src/app/main/week/week.component';
import { WeekObjectComponent } from '@src/app/main/week/week.model';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreLoaderComponent,
    DetailedComponent,
    SkyconComponent,
    WeekComponent,
    WeekObjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NativeScriptModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
