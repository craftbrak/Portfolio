import { Injectable } from '@angular/core';
import categoriesJson from '../../assets/categories.json'
import linesJson from '../../assets/lines.json'
import {Category} from "../model/Category";
import {Line} from "../model/Line";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly cats : Category[]
  private readonly lines : Line[] = []
  constructor() {
    this.cats = categoriesJson.categories
    linesJson.lines.forEach(line=>{
      const cat= this.getCategory(line.category_id)
      if (cat) this.lines.push(new Line(cat,line.title,line.details,line.proofs,line.real_time))
    })
  }
  getCategories():Category[]{
    return this.cats
  }
  getCatLine(cat: Category): Line | undefined{
    const ls= this.getCatLines(cat)
    let line = new Line(cat,'',[''],[],)
    ls!.forEach(l =>{
      line.real_time += l.real_time
    })
    line.valued_time = line.real_time>=10 ? 10: line.real_time
    return line
  }
  getCatLines(cat: Category): Line[] |undefined{
    return this.lines.filter(line => line.category === cat);
  }
  getAllCatLine(): Line[]{
    let lines: Line[] =[]
    this.cats.forEach(cat=>{
      let c = this.getCatLine(cat)
      if(c) lines.push(c)
    })
    return lines
  }
  getCategory(category_id :string): Category | undefined{
    return this.cats.find(cat => cat.id === category_id)
  }
}
