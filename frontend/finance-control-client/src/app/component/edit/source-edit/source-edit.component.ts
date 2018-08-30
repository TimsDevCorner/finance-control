import {Component, OnDestroy, OnInit} from '@angular/core';
import {Transaction} from '../../../entity/transaction';
import {ActivatedRoute, Router} from '@angular/router';
import {TransactionService} from '../../../service/transaction.service';
import {NgForm} from '@angular/forms';
import {Subscription} from '../../../../../node_modules/rxjs';
import {Source} from '../../../entity/source';
import {SourceService} from '../../../service/source.service';

@Component({
  selector: 'app-source-edit',
  templateUrl: './source-edit.component.html',
  styleUrls: ['./source-edit.component.css']
})
export class SourceEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private source: Source;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sourceService: SourceService
  ) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.sourceService.get(id).subscribe((source: any) => {
          if (source) {
            this.source = source;
            this.source.href = source._links.self.href;
          } else {
            console.log(`Source with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/sources']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save(form: NgForm) {
    this.sourceService
      .save(form)
      .subscribe(
        result => this.gotoList(),
        error => console.error(error)
      );
  }

  remove(href) {
    this.sourceService
      .remove(href)
      .subscribe(
        result => this.gotoList(),
        error => console.error(error)
      );
  }
}
