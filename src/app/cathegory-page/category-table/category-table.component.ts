import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Line } from '../../model/Line';
import { Category } from '../../model/Category';
import { CategoryService } from '../../services/category.service';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
// Change from MatLegacyDialog to MatDialog in the new import path:
import { MatDialog } from '@angular/material/dialog';

interface Totals {
  real_time: number;
  value_time: number;
}

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  category_id: string = '';
  category: Category;
  categoryLines: Line[] = [];
  displayedTotals: Totals = { real_time: 0, value_time: 0 };

  constructor(
    private route: ActivatedRoute,
    private catService: CategoryService,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe(params => (this.category_id = params['category_id']));

    this.category = this.catService.getCategory(this.category_id)!;
    this.categoryLines = this.catService.getCatLines(this.category)!;

    // Sum real_time for displayedTotals
    this.categoryLines.forEach(line => {
      this.displayedTotals.real_time += line.real_time;
    });

    // If real_time >= 10, set value_time to 10; otherwise match real_time
    this.displayedTotals.value_time =
      this.displayedTotals.real_time >= 10 ? 10 : this.displayedTotals.real_time;
  }

  ngOnInit(): void {}

  showDetailsOfLine(line: Line) {
    console.log(line);
  }

  openDialog(line: Line): void {
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
      data: line
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
