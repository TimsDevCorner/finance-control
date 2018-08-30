import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TransactionService} from '../../../service/transaction.service';
import {Subscription} from '../../../../../node_modules/rxjs';
import {Transaction} from '../../../entity/transaction';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private transaction: Transaction;

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
            this.transaction = car;
            this.transaction.href = car._links.self.href;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList()
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/transactions']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save(form: NgForm) {
    this.transactionService
      .save(form)
      .subscribe(
        result => this.gotoList(),
        error => console.error(error)
      );
  }

  remove(href) {
    this.transactionService
      .remove(href)
      .subscribe(
      result => this.gotoList(),
      error => console.error(error)
    );
  }

}
