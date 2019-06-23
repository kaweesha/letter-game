import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ResultBlockComponent } from './result-block/result-block.component';

const routes: Routes = [
  { path: 'gamePage',   component: NewLetterComponent},
  { path: 'menuPage', component: MenuPageComponent},
  { path: 'resultsPage', component: ResultBlockComponent},
  { path: '', redirectTo: 'menuPage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }