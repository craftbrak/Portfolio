import { Component, OnInit } from '@angular/core';
import {Line} from "../../model/Line";
import categoriesJson from '../../../assets/categories.json'
import linesJson from '../../../assets/lines.json'
import {Category} from "../../model/Category";

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  constructor() { }
  categories: Category[] = categoriesJson.categories
  allLines= linesJson.lines
  categoryLines: Line[] = []
  displayedColumns: string[] = ['category', 'real_time', 'valued_time'];
  ngOnInit(): void {
    this.categories.forEach(category =>{
      this.allLines.filter(line => line.category_id == category.id)
        .forEach(line =>{
          const cLine =this.categoryLines.find(cline=> cline.category.id == category.id);
          if (cLine) cLine.reel_time += line.real_time
          else this.categoryLines.push(new Line(category,line.real_time,0))
        })
    })
    this.categoryLines.forEach(cLine=>{
      if (cLine.reel_time >10) cLine.value_time = 10
    })
  }
}
