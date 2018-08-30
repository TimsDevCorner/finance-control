import { Component, OnInit } from '@angular/core';
import {SourceService} from '../../../service/source.service';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css']
})
export class SourceListComponent implements OnInit {
  public sources: Array<any>;

  constructor(
    private sourceService: SourceService
  ) { }

  ngOnInit() {
    this.sourceService.getAll().subscribe(
      sources => {
        this.sources = sources;
      }
    );

  }
}
