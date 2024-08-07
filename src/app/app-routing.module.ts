import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
// 
const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {
    path: 'auth',
    loadChildren: () => import('./Core/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./Core/admin/admin.module').then(mod => mod.AdminModule),
  },
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
