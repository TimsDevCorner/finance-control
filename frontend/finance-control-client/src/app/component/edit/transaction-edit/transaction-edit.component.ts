import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TransactionService} from '../../../service/transaction.service';
import {Subscription} from '../../../../../node_modules/rxjs';
import {Transaction} from '../../../entity/transaction';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {

  private subscription: Subscription;
  private currentTransaction: Transaction;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.transactionService.get(id).subscribe((car: any) => {
          if (car) {
            this.currentTransaction = car;
            this.currentTransaction.href = car._links.self.href;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.router.navigate(['/transactions']);
          }
        });
      }
  });
  }

}
