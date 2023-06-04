import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'issues', component: IssueListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
