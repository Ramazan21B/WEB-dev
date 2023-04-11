import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import {Product, products} from '../products';
import {ActivatedRoute} from "@angular/router";
import {Categories,categories} from "../categories";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  category:Categories;
  constructor(private clipboard: Clipboard,private route:ActivatedRoute) {
    this.category = {} as Categories;
  }
  ngOnInit() :void {
    const categoryname = String(this.route.snapshot.paramMap.get('Category'))
    this.category = categories.find((x) => x.category === categoryname) as Categories;
  }
  share(link:string, destination:string) {
    window.alert('The product has been shared!');
    this.clipboard.copy(link);
    window.open(destination);
  }
  Onlike(current:Product){
    current.likes+=1;
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/