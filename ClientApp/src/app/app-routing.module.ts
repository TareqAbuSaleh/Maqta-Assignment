import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './base/guard/auth.guard';
const routes: Routes = [
  {
    path: 'add-request',canActivate:[AuthGuard],
    loadChildren: () => import('./request/pages/add-request/add-request.module').then(m => m.AddRequestModule)
  },
  {
    path: 'add-request/:id',canActivate:[AuthGuard],
    loadChildren: () => import('./request/pages/add-request/add-request.module').then(m => m.AddRequestModule)
  },
   {
    path: 'request',canActivate:[AuthGuard],
    loadChildren: () => import('./request/pages/request/request.module').then(m => m.RequestModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./account/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./account/add-user/add-user.module').then(m => m.AddUserModule)
  },
  {
    path: '',
    redirectTo: 'request',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
