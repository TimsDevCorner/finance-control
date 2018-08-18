import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './component/navigator/navigator.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TransactionListComponent } from './component/list/transaction-list/transaction-list.component';
import { SourceListComponent } from './component/list/source-list/source-list.component';
import { AccountListComponent } from './component/list/account-list/account-list.component';
import { ListBaseComponent } from './component/list/list-base/list-base.component';
import { TransactionService } from './service/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionEditComponent } from './component/edit/transaction-edit/transaction-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transaction-add/:id', component: TransactionEditComponent },
  { path: 'transaction-edit/:id', component: TransactionEditComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'sources', component: SourceListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    DashboardComponent,
    NotFoundComponent,
    TransactionListComponent,
    SourceListComponent,
    AccountListComponent,
    ListBaseComponent,
    TransactionEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
