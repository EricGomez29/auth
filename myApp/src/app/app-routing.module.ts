import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NoLoginGuard } from "./guards/no-login.guard";

const routes: Routes = [{ 
    path: 'home',
    loadChildren: './home/home.module#HomePageModule', canActivate:[AuthGuard]
  },{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'login',
    loadChildren: './components/login/login.module#LoginPageModule', canActivate:[NoLoginGuard]
  },{
    path: 'register',
    loadChildren: './components/register/register.module#RegisterPageModule', canActivate:[NoLoginGuard]
  },{ 
    path: '**', redirectTo: 'home', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
