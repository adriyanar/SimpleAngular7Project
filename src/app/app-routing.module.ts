import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ElementPageComponent } from './element-page/element-page.component';

const routes: Routes = [
    {path: 'main', component: MainPageComponent},
    {path: 'create', component: CreatePageComponent},
    {path: 'element/:id', component: ElementPageComponent},
    {path: 'element', component: ElementPageComponent},
    {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
