import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { TransactionComponent } from './component/edit-mask/transaction/transaction.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TransactionListComponent } from './component/list/transaction-list/transaction-list.component';
import { SourceListComponent } from './component/list/source-list/source-list.component';
import { AccountListComponent } from './component/list/account-list/account-list.component';
import { ListBaseComponent } from './component/list/list-base/list-base.component';
import {TransactionService} from './service/transaction.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'sources', component: SourceListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TransactionComponent,
    DashboardComponent,
    NotFoundComponent,
    TransactionListComponent,
    SourceListComponent,
    AccountListComponent,
    ListBaseComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
