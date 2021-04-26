import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ResultsComponent} from './results/results.component';
import {MainResultComponent} from './main-result/main-result.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'mainResult', component: MainResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
