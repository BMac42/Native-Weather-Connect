import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '@src/app/app.component';
import { MainComponent } from '@src/app/main/main.component';
import { PreLoaderComponent } from '@src/app/pre-loader/pre-loader.component';
import { DetailedComponent } from '@src/app/main/detailed/detailed.component';
import { SkyconComponent } from '@src/app/skycon/skycon.component';
import { WeekComponent } from '@src/app/main/week/week.component';
import { WeekObjectComponent } from '@src/app/main/week/week.model';
import { ApiService } from '@src/app/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreLoaderComponent,
    DetailedComponent,
    SkyconComponent,
    WeekComponent,
    WeekObjectComponent,
    ApiService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
