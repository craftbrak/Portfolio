import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from "./main-page/home/home.component";
import { MainTableComponent } from "./main-page/main-table/main-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TypeSafeMatCellDef } from './directive/type-safe-mat-cell-def.directive';
import { CategoryPageComponent } from './cathegory-page/category-page.component';
import { CategoryTableComponent } from "./cathegory-page/category-table/category-table.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DetailDialogComponent } from './cathegory-page/detail-dialog/detail-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from "@angular/material/dialog";  // <-- Replaced legacy-dialog
import { FooterComponent } from './footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatExpansionModule} from "@angular/material/expansion";
import {CategoryListComponent} from "./category-list/category-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypeSafeMatCellDef,
    CategoryPageComponent,
    CategoryTableComponent,
    NavBarComponent,
    DetailDialogComponent,
    FooterComponent,
    MainTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    RouterModule,
    MatExpansionModule,
    CategoryListComponent,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
