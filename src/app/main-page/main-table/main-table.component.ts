import { Component, OnInit } from '@angular/core';
import {Line} from "../../model/Line";
import categoriesJson from '../../../assets/categories.json'
import linesJson from '../../../assets/lines.json'
import {Category} from "../../model/Category";
import {Router} from "@angular/router";

interface Cline {
  category: Category,
  real_time: number,
  value_time: number,
}
@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {

  constructor(private router: Router) { }
  categories: Category[] = categoriesJson.categories
  allLines= linesJson.lines
  categoryLines: Line[] = []
  displayedColumns: string[] = ['category', 'real_time', 'valued_time','details'];
  ngOnInit(): void {
    this.categories.forEach(category =>{
      this.allLines.filter(line => line.category_id == category.id)
        .forEach(line =>{
          const cLine =this.categoryLines.find(cline=> cline.category.id == category.id);
          if (cLine) cLine.real_time += line.real_time
          else this.categoryLines.push(new Line(category,line.title,line.details,line.proofs, line.real_time))
        })
    })
    this.categoryLines.forEach(cLine=>{
      if (cLine.real_time >10) cLine.valued_time = 10
    })
  }
  showDetailsOfCategory(category: Category) {
    this.router.navigate(['portfolio',category.id]).then();
  }
}
