import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import categoriesJson from '../../../assets/categories.json'
import linesJson from '../../../assets/lines.json'
import {Line} from "../../model/Line";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  category_id : string =''
  private categoryCollection = categoriesJson.categories;
  category : Category
  lines= linesJson.lines;
  categoryLines : Line[] = []
  displayedColumns: string[] = ['category', 'real_time','details'];
  displayedTotals: number[] = [0,0];
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.category_id = params['category_id'])
    // @ts-ignore
    this.category = this.categoryCollection.find(cat => cat.id = this.category_id)
    this.lines=this.lines.filter(line=> line.category_id == this.category.id)
    this.lines.forEach(line=>{
        this.categoryLines.push(new Line(this.category,line.title,line.details,line.proofs,line.real_time))
    })
    this.categoryLines.forEach(line=>{
      this.displayedTotals[1] += line.real_time
    })
    if (this.displayedTotals[1]>= 10) this.displayedTotals[0] = 10
    else this.displayedTotals[0] = this.displayedTotals[1]
  }

  ngOnInit(): void {

  }


  showDetailsOfLine(Line: Line) {

  }
}
