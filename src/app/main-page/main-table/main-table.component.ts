import { Component, OnInit } from '@angular/core';
import {Line} from "../../model/Line";
import {Category} from "../../model/Category";
import {Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
interface totals {
  real_time: number,
  value_time: number,
}
@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {
  categories: Category[] = []
  categoryLines: Line[] = []
  displayedTotals: totals= {real_time : 0 ,value_time: 0};
  constructor(private router: Router, private catService : CategoryService) {
    this.categories = this.catService.getCategories()
    this.categoryLines =this.catService.getAllCatLine()
    this.categoryLines.forEach(cLine=>{
      this.displayedTotals.real_time += cLine.real_time
      this.displayedTotals.value_time += cLine.valued_time
    })
  }

  ngOnInit(): void {

  }
  showDetailsOfCategory(category: Category) {
    this.router.navigate(['portfolio',category.id]).then();
  }


}
