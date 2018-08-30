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
import { TransactionService } from './service/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransactionEditComponent } from './component/edit/transaction-edit/transaction-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule, MatFormFieldModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { SourceEditComponent } from './component/edit/source-edit/source-edit.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transaction-add', component: TransactionEditComponent },
  { path: 'transaction-edit/:id', component: TransactionEditComponent },
  { path: 'sources', component: SourceListComponent  },
  { path: 'source-add', component: SourceEditComponent  },
  { path: 'source-edit/:id', component: SourceEditComponent },
  { path: 'accounts', component: AccountListComponent },
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
    TransactionEditComponent,
    SourceEditComponent
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
    MatListModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
