import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pages } from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }, {
    path: 'signin',
    component: pages['signin']
  }, {
    path: 'signup',
    component: pages['signup']
  }, {
    path: 'landing',
    component: pages['landing']
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
