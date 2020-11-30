import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { PsqlService } from '../psql.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // @Input() modalCloseInput: EventEmitter<any> = new EventEmitter<any>();

  constructor(private psqlService: PsqlService) {}
  data2: any;
  ngOnInit() {
    this.psqlService.getProduct().subscribe((res) => {
      if (res && res.success) {
        this.data2 = res.data;
        console.log(this.data2);
      }
    });
  }
}
