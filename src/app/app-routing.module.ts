import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'membership',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'membership',
      exposedModule: './Module'
    })
    .then(m => m.MembershipModule)
  },
  {
    path: 'treasury',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'treasury',
      exposedModule: './Module'
    })
    .then(m => m.TreasuryModule)
  },
  {
    path: '',
    redirectTo: 'membership',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
