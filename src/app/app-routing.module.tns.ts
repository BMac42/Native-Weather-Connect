import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { MainComponent } from '@src/app/main/main.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/app-main',
      pathMatch: 'full',
  },
  {
      path: 'main view',
      component: MainComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
