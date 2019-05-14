import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ElementPageComponent } from './element-page/element-page.component';

import { ElementsService } from './elements.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreatePageComponent,
    ElementPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
