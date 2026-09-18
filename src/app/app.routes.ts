import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'loans',
    loadChildren: () => loadRemoteModule('loan-mfe', './Routes').then((m) => m.routes),
  },
  {
    path: 'insurance',
    loadChildren: () => loadRemoteModule('insurance-mfe', './Routes').then((m) => m.routes),
  },
];
