import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../../service/transaction.service';
import {Transaction} from '../../../entity/transaction';
import {Observable, of} from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  public transactions: Array<any>;

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionService.getAll().subscribe(
      transactions => this.transactions = transactions
    );
  }

}
