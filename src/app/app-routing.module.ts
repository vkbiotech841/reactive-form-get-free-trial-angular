import { UserListComponent } from './pages/user-list/user-list.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "user-detail",
    component: UserDetailComponent
  },
  {
    path: "user-list",
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
