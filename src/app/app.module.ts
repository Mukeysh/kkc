import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app-routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StepsComponent } from './steps/steps.component';
import { SelectFingersComponent } from './select-fingers/select-fingers.component';
import { SelectChocolateComponent } from './select-chocolate/select-chocolate.component';
import { SelectIngredientsComponent } from './select-ingredients/select-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StepsComponent,
    SelectFingersComponent,
    SelectChocolateComponent,
    SelectIngredientsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
