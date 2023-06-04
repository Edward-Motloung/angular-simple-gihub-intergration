import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IssueListComponent } from './components/issue-list/issue-list.component'
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { Experiment2Component } from './components/experiment2/experiment2.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoCardComponent,
    HomeComponent,
    RepoDetailsComponent,
    IssueListComponent,
    FilterPipe,
    Experiment2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
