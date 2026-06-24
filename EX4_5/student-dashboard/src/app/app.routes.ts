import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Students } from './students/students';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'students', component: Students },
  { path: 'about', component: About },

  { path: '**', redirectTo: '' }
];