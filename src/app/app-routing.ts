import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SelectFingersComponent } from './select-fingers/select-fingers.component';
import { SelectChocolateComponent } from './select-chocolate/select-chocolate.component';
import { SelectIngredientsComponent } from './select-ingredients/select-ingredients.component';


const routes: Routes = [
  {path: 'select-fingers', component: SelectFingersComponent},
  {path: 'select-chocolate', component: SelectChocolateComponent},
  {path: 'select-ingredinets', component: SelectIngredientsComponent},
  {path: '', component: HomeComponent},
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);