import {Component, OnInit} from '@angular/core';
import {MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {Category} from "../model/Category";
import {CategoryService} from "../services/category.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-category-list',
  imports: [
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionModule,
    NgForOf
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit{
  categories: Category[] = []
  constructor( protected catService : CategoryService) {
    this.categories = this.catService.getCategories()
  }

  ngOnInit(): void {
  }
}
