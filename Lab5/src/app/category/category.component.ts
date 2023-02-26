import { Component } from '@angular/core';
import {categories, Category} from '../categories';
import {products, Product} from '../products';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories = categories;
  products = products;
  show:Category[] = [];
  likes:number = 0;
  ngOnInit(){
    for (let i of categories){
      if(i.choose){
        this.show.push(i)
      }
    }
    for (let i of products){
      if (i.liked){
        this.likes++;
      }
    }
  }
  update(category:Category){
    if (!category.choose){
      this.show.push(category);
      category.choose = true;
    }
    else{
      this.show = this.show.filter(add => add != category)
      category.choose = false;
    }
  }

  like(increase:number){
    this.likes += increase;
  }
}