import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { products, Product } from '../products';
import { Category } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() status !: Category[];
  @Output() numLiked = new EventEmitter();
  products = products;
  constructor(private clipboard: Clipboard) {}
  share(link:string, destination:string) {
    window.alert('The product has been shared!');
    this.clipboard.copy(link);
    window.open(destination);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  inList(category:string){
    for (let i of this.status){
      if (i.type == category){
        return true;
      }
    }
    return false;
  }

  delete(product:Product){
    product.visible=false;
    if (product.liked){
      product.liked = false;
      this.numLiked.emit(-1);
    }
  }

  like(product:Product){
    if (!product.liked){
      product.liked = true;
      this.numLiked.emit(1);
    }
    else {
      product.liked = false;
      this.numLiked.emit(-1);
    }
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/