import { Component, OnInit } from '@angular/core';
// import { Item } from '../item';
import { ITEMS } from '../items';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  itemCounter: number = 0;
  total: number = 0;
  items = ITEMS;  

  constructor() { }

  ngOnInit(): void {
  }


  countItems() {
    this.itemCounter += 1;
  }


}
