import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Line} from "../../model/Line";
import {Category} from "../../model/Category";
import {CategoryService} from "../../services/category.service";

interface totals {
  real_time: number,
  value_time: number,
}
@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  category_id : string =''
  category : Category
  categoryLines : Line[] = []
  displayedTotals: totals= {real_time : 0 ,value_time: 0};
  constructor(private route: ActivatedRoute , private catService : CategoryService) {
    this.route.params.subscribe(params => this.category_id = params['category_id'])
    this.category =this.catService.getCategory(this.category_id)!
    this.categoryLines = this.catService.getCatLines(this.category)!
    this.categoryLines.forEach(line=>{ this.displayedTotals.real_time += line.real_time })
    this.displayedTotals.value_time =  this.displayedTotals.real_time>= 10 ? this.displayedTotals.value_time = 10 : this.displayedTotals.real_time
  }

  ngOnInit(): void {

  }


  showDetailsOfLine(Line: Line) {
    console.log(Line)
  }
}
